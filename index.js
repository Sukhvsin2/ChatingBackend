const express = require('express')
const http = require('http')
const socketio = require('socket.io')
const cors = require('cors')

const PORT = process.env.PORT || 5000
const router = require('./router')

const app = express()
const server = http.createServer(app);
const io = socketio(server);

app.use(cors());
app.use(router)

io.on('connection', (socket) => {
    console.log('connected to socket!!');

    socket.on('disconnect', () => {
        console.log('User left!!');
    })
})

server.listen(PORT, () => {
    console.log('server running at '+PORT);
})
