const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const authRouter = require('./auth/auth-router')
const usersRouter = require('./users/users-router')

const server = express()

server.use(express.json())
server.use(helmet())
server.use(cors())

server.use('/api/auth', authRouter);
server.use("/api/users", usersRouter);

server.get('/', (req,res) => {
  res.send("Welcome to our market's API!")
})

module.exports = server
