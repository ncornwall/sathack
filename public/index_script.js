var socket = io();

$( document ).ready(function() {
  // Handler for .ready() called.
  debugger
   socket.emit('pageload', 'message');
});

// When the user clicks on send button
$('.meetup').click(function(){
 	socket.emit('message', " is available to " + $(this).text().toLowerCase());
});

// When we receive a user message, add to html list
socket.on('user-message', function(msg) {
  var new_msg = $('<div class="panel-body">').text(msg);
  $('#events').append(new_msg);
});