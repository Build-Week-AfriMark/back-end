const Item = require('./items-model')

// incomplete not validating contents required
 const validateContent = async (req, res, next) => { 
   const {name, description, price, location, category} = await req.body 
  try {
    if (name === undefined || typeof name !== "string" || !name.trim()) {
      next(
        res.status(400).json({message: "item name required"})
      )
    } else if ( description === undefined || typeof description !== "string" || !description.trim() ) {
      next(
        res.status(400).json({message: "item description required"})
        )
    } else if ( price === undefined || typeof price !== "string" || !price.trim() ) {
      next(
        res.status(400).json({message: "item price required"})
        )
    } else if (
      location === undefined || typeof location !== "string" || !location.trim() ) {
        next(
          res.status(400).json({message: "item location required"})
          )
      } else if (
        category === undefined || typeof category !== "string" || !category.trim() ) {
          next(
            res.status(400).json({message: "item category required"})
            )
        } else {
        next()
      }
  } catch {
    next()
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
        
        module.exports =  {
          validateContent,
          validateId,

      }