const path = require('path');
const express = require('express');
const socketIO = require('socket.io');
const http = require('http');

const publicPath = path.join(__dirname, '/../public');
const port = process.env.PORT || 3000;
let app = express();
let server = http.createServer(app);
let io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('New User Connected!');

  socket.on('disconnect', () => {
    console.log('User was Disconnected!');
  })
});


server.listen(port, () => {
  console.log(`Server is Up on Port ${port}`);
});
