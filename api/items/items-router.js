const router = require('express').Router()
const Item = require('./items-model')

// GET ITEMS
router.get('/', (req, res, next) => {
    Item.getAll()
    .then(items => {
      res.json(items);
    })
    .catch(err => res.send(err));
})

//GET BY /:ID >>>>>> needs middle ware if un-existing id is inputted
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


  function validateContent(req, res, next) {
    if (!req.body) {
      res.status(400).json({ message: "Items field is required." });
    } else {
      next();
    }
  }

  function validateId(req, res, next) {
    const id = req.params.id;
    Item.findById(id)
      .then(item => {
        if (item) {
          req.item = item;
          next();
        } else {
          res.status(404).json({ message: "Item doesn't exist." });
        }
      })
      .catch(err => {
        res.status(500).json(err);
      });
  }

  // adds new item 200 ok
  router.post('/add-item', validateContent , (req, res) => {
    Item.addItem(req.body)
    .then(item => {
      res.status(200).json(item);
    })
    .catch(err => {
      res.status(500).json(err);
    });
})


  // update an item status 201
  router.put('/:id', validateId, validateContent, (req, res, next) => {
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

// deletes an item 200 OK
router.delete('/:id', validateId, (req, res) => {
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