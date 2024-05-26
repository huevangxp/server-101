const bodyParser = require('body-parser');
const socketIO = require('socket.io')
const express = require('express');
const cors = require('cors')
const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }))


const port = process.env.PORT || 7000
const server = app.listen(port, () => {
    console.log('server running on port : ', port);
})

const io = socketIO(server)
io.on('connection', (socket) => {
    console.log('client socket connected!');
})