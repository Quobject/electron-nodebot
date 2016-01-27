var socket;

$(document).ready(function () {
  $(".btn").click(clickHandler);

  socket = io('http://localhost:3000');
  socket.on('connect', function () {
    console.log('socket io connected');
  });
  socket.on('event', function (data) {

  });

  socket.on('disconnect', function () {
    console.log('socket io disconnect');
  });

});

var clickHandler = function (e) {  
  var id = e.currentTarget.id
  console.log('id =', id);

  socket.emit('buttonClick', id)
};
