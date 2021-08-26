const router = require('express').Router()
const Users = require('../auth/auth-model');


router.get("/", (req, res) => { 
    Users.find()
      .then(users => {
        res.json(users);
      })
      .catch(err => res.send(err));
  });

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
  }

// validate userID exists 
  router.get("/:id", validateId, (req, res) => {   
    Users.findById(req.params.id)
      .then(user => {
        res.json(user);
      })
      .catch(err => res.send(err));
  });



module.exports = router