// server.js
var express = require('express');
var app = express();
var httpServer = require('http').createServer(app);
var five = require('johnny-five');
var io = require('socket.io')(httpServer);

var port = 3000;

httpServer.listen(port);
console.log('Server available at http://localhost:' + port);
console.log('Waiting for connection');

var led;

//Arduino board connection
var board = new five.Board();
board.on('ready', function () {
  console.log('Arduino connected');
  led = new five.Led(13);
});

//Socket connection handler
io.on('connection', function (socket) {
  

  socket.on('buttonClick', function (data) {
    console.log('buttonClick data = ', data);

    if (data === 'onButton') {
      led.stop();
      led.on();
    }
    if (data === 'offButton') {
      led.stop();
      led.off();
    }
    if (data === 'strobeButton') {
      led.strobe();
    }

  });
 
});


