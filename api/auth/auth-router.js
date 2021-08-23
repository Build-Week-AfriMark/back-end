const router = require('express').Router()

router.get('/hi', (req, res, next) => {
    res.json('auth router up')
})

module.exports = router