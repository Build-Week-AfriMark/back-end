const router = require('express').Router()
const Users = require('../auth/auth-model');
//add midware to restrict access to end point



//get all users // add a restricted
    // router.get('/', (req, res, next) => {
    //     res.status(200).json('gets users')
    // })


router.get("/", (req, res) => { 
    Users.find()
      .then(users => {
        res.json(users);
      })
      .catch(err => res.send(err));
  });

module.exports = router