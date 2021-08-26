const User = require('./auth-model')

const validateCreds = (req, res, next) => {
    let user = req.body
    if (!user.username || !user.password) {
      res.status(400).json({
        message: "username and/or password required"
      })
    } else {
      next()
    }
    }
    
    
    const validateUsername = (req, res, next) => {
      User.getUsername(req.body.username)
      .then(data => {
        if (data) {
          next(
            res.status(400).json({message: `username ${req.body.username} taken`})
          )
        } else {
          next()
        }
      })
      .catch(next)
    }

    module.exports ={
        validateCreds,
        validateUsername,
    }