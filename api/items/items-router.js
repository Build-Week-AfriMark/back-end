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
    Item.getItemById(id)
      .then(item => {
        res.status(200).json(item);
      })
      .catch(err => {
        res.status(500).json(err);
      });
  });

  // adds new item 200 ok
  router.post('/add-item', (req, res) => {
    res.json('can add an item')
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