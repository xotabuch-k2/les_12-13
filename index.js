import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import fs from 'fs';

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const PORT = 3000;

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.render('index');
});

server.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});

io.on('connection', (socket) => {
  console.log(`System user is connected`);

  socket.on('login', (name) => {
    socket.username = name;
  });

  socket.on('disconnect', (reason) => {
    console.log(`System user ${socket.username} is disconnected, reason: ${reason}`);
  });

  socket.on('send_msg', (data) => {
    io.emit('new_msg', { name: data.name, msg: data.msg });

    // Save message to a text file
    const message = `${data.name}: ${data.msg}\n`;
    const writeStream = fs.createWriteStream('message.txt', { flags: 'a' });
    writeStream.write(message);
    writeStream.end();
    
    writeStream.on('finish', () => {
      console.log('Message saved successfully.');
    });

    writeStream.on('error', (err) => {
      console.error('Error saving message:', err);
    });
  });
});