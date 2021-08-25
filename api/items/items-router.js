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

//GET BY /:ID >>>>>> needs middle ware if unexisting id is inputted
router.get("/:id",  (req, res) => {
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
  router.put('/:id', (req, res) => {
      res.json('can update an item')
  })

// deletes an item 200 OK
router.delete('/:id', (req, res) => {
    res.json('can delete an item')
})

module.exports = router