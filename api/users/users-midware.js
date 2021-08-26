const Users = require('../auth/auth-model')

function validateId(req, res, next) {
    const id = req.params.id;
    Users.findById(id)
      .then(user => {
        if (user) {
          req.user = user;
          next();
        } else {
          res.status(404).json({ message: "User doesn't exist." });
        }
      })
      .catch(err => {
        res.status(500).json(err);
      });
  };

  module.exports = validateId