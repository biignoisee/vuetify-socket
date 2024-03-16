import express from 'express'
import { Server } from 'socket.io'
import { createServer } from 'http'
import cors from 'cors'

const app = express()

const server = createServer(app)
const io = new Server(server, {
  cors:{
    origin: 'http://localhost:3000/',
    methods: ['GET', 'POST'],
    credentials: true
  }
})

io.on('connection', (socket) => {
  console.log("WS connected", socket.id);
});

const PORT = 30001 || process.env.PORT

server.listen(PORT, () => {
  console.log("Server is running");
})