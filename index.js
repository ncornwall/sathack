global.messages = [];
global.replies = [];

var app = require('express')();
var express = require('express');
var http = require('http').Server(app);
var io = require('socket.io')(http);

var port = process.env.PORT || 5000;

// Serve our index.html page at the root url
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

// Have express serve all of our files in the public directory
app.use(express.static('public'));

// Code in this block is run every time a new socketIO connection is made
io.on('connection', function (socket) {
  // socket.id is a unique id for each socket connection
  console.log(socket.id + ' connected');

  for (var i = 0; i < global.messages.length; i++) {
    socket.emit('user-message', global.messages[i]);
  }

  for (var i = 0; i < global.replies.length; i++) {
    socket.emit('reply', global.replies[i]);
  }

  // The following two declarations create handlers for
  // socket events on this specific connection

  // You can do something when the connection disconnects
  socket.on('disconnect', function(){
    console.log(socket.id + ' disconnected');
  });

  // message is our custom event, emit the message to everyone
  socket.on('message', function(msg) {
    console.log("Message: " + msg);
    io.emit('user-message', msg);
    global.messages.push(msg);
  });

  // reply is another custom event, emit the reply to everyone
  socket.on('reply', function(msg) {
    console.log("Reply: " + msg);
    io.emit('reply', msg);
    global.replies.push(msg);
  });
});

// Starts the web server at the given port
http.listen(process.env.PORT || 5000, function(){
  console.log('Listening on ' + port);
});
