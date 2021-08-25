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

  router.get("/:id", (req, res) => {   
    Users.findById(req.params.id)
      .then(user => {
        res.json(user);
      })
      .catch(err => res.send(err));
  });

  // router.get("/:id",  (req, res) => {
  //   const id = req.body.user_id;
  //   Users.findById(id)
  //     .then(user => {
  //       res.status(200).json(user);
  //     })
  //     .catch(err => {
  //       res.status(500).json(err);
  //     });
  // });  

module.exports = router