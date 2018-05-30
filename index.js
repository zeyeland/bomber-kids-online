var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);


app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  console.log("a user connected");

  socket.on('sendNoramlBomb', function(xPosition, yPosition, power){
    
    socket.broadcast.emit('sendNoramlBomb', xPosition, yPosition, power);
  });
  socket.on('sendRedBomb', function(xPosition, yPosition, power){
    
    socket.broadcast.emit('sendRedBomb', xPosition, yPosition, power);
  });
  socket.on('sendBlueBomb', function(xPosition, yPosition, power){
    
    socket.broadcast.emit('sendBlueBomb', xPosition, yPosition, power);
  });
  socket.on('sendGreyBomb', function(xPosition, yPosition, power){
    
    socket.broadcast.emit('sendGreyBomb', xPosition, yPosition, power);
  });
  socket.on('sendGreenBomb', function(xPosition, yPosition, power){
    
    socket.broadcast.emit('sendGreenBomb', xPosition, yPosition, power);
  });

  socket.on('sendPlayer', function(locationY, locationX, direction){
    
    
    io.emit('sendPlayer',locationY, locationX, direction);
  });

  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });

  socket.on('disconnect', function(){
    console.log("user disconnected");
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});