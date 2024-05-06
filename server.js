const path = require('path')
const express = require('express')
const cors = require('cors')
const server = express()

server.use(cors())
server.use(express.urlencoded({ extended: false }))
server.use(express.json())

server.use('/', express.static(path.join(__dirname, '/public')))
const PORT = 5000

server.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
})
