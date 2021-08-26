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

module.exports =  {
    validateId,
    validateContent,
}