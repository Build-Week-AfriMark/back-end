const router = require('express').Router()
const Item = require('./items-model')
//middleware
const {restrict} = require('../auth/restricted');
  const {
    validateContent,
    validateId,
  } = require('./items-midware')

router.get('/', (req, res, next) => {
    Item.getAll()
    .then(items => {
      res.json(items);
    })
    .catch(err => res.send(err));
})

router.get("/:id",  validateId, (req, res) => {
    const id = req.params.id;
    Item.findById(id)
      .then(item => {
        res.status(200).json(item);
      })
      .catch(err => {
        res.status(500).json(err);
      });
  });


  // add middleware to validate user
  router.post('/add-item', 
  validateContent,
  restrict, 
  (req, res) => {
    Item.addItem(req.body)
    .then(item => {
      res.status(200).json(item);
    })
    .catch(err => {
      res.status(500).json(err);
    });
})


  // add middleware to validate user
  router.put('/:id', 
  validateId, 
  validateContent, 
  restrict,
   (req, res, next) => {
    const {id} = req.params;
  const changes = req.body;
  Item.updateItem(id, changes)
    .then(updatedItem => {
      res.status(201).json(updatedItem);
    })
    .catch(err => {
      res.status(500).json(err);
    });
})

// validate user id
router.delete('/:id', validateId, restrict, (req, res) => {
  const id = req.params.id;
  Item.deleteItem(id)
    .then(deletedItem => {
      res.status(200).json({ message: `Item with id ${id} successfully deleted.`});
    })
    .catch(err => {
      res.status(500).json(err);
    });
});


module.exports = router