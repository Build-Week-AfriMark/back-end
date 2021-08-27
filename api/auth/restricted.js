const jwt = require('jsonwebtoken')
const { JWT_SECRET } = require('./secret')


const restrict = (req, res, next) => {
    const token = req.headers.authorization
    if(!token) {
        return next(
            res.status(401).json({message: "token required"})
        )
    }
    jwt.verify(token, JWT_SECRET, (err, token) => {
        if(err) {
            next(
                res.status(401).json({message: "invalid token"})
            )
        } else {
            req.decodedToken = token
            next()
        }
    })
}

module.exports = {restrict}