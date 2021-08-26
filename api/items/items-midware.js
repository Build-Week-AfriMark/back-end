const Item = require('./items-model')

// incomplete not validating contents required
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


  function validateItemName(req, res, next) {
    const {name} = req.body
  if (
    name === undefined || typeof name !== "string" || !name.trim() ) {
      next(
        res.status(400).json({message: "item name required"})
      )
    } else {
      next()
    }
  }
 
  function validateItemLocation(req, res, next) {
    const {location} = req.body
  if (
    location === undefined || typeof location !== "string" || !location.trim() ) {
      next(
        res.status(400).json({message: "item location required"})
      )
    } else {
      next()
    }
  }

  function validateItemDesc(req, res, next) {
    const {description} = req.body
  if (
    description === undefined || typeof description !== "string" || !description.trim() ) {
      next(
        res.status(400).json({message: "item description required"})
      )
    } else {
      next()
    }
  }

  function validateItemPrice(req, res, next) {
    const {price} = req.body
  if (
    price === undefined || typeof price !== "string" || !price.trim() ) {
      next(
        res.status(400).json({message: "item price required"})
      )
    } else {
      next()
    }
  }

module.exports =  {
    validateId,
    validateContent,
    validateItemName,
    validateItemLocation,
    validateItemDesc,
    validateItemPrice,
}