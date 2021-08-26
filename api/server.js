const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const authRouter = require('./auth/auth-router')
const usersRouter = require('./users/users-router')
const itemsRouter = require('./items/items-router')

const server = express()

server.use(express.json())
server.use(helmet())
server.use(cors())


server.use('/api/auth', authRouter);
// restrict /api/users
server.use("/api/users", usersRouter);

server.use("/api/items", itemsRouter);

server.get('/', (req,res) => {
  res.send("Welcome to our market's API!")
})

module.exports = server
