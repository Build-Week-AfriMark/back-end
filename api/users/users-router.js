const router = require('express').Router()
const Users = require('../auth/auth-model');
const validateId = require('./users-midware');


router.get("/", (req, res) => { 
    Users.find()
      .then(users => {
        res.json(users);
      })
      .catch(err => res.send(err));
  });

  router.get("/:id", validateId, (req, res) => {   
    Users.findById(req.params.id)
      .then(user => {
        res.json(user);
      })
      .catch(err => res.send(err));
  });



module.exports = router