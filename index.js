const express = require('express')
const http = require('http')
const socketio = require('socket.io')

const PORT = process.env.PORT || 2727

const app = express();
const server = http.createServer(app)
const io = socketio(server)


server.listen(PORT, () => {
    console.log('server at '+PORT);
})