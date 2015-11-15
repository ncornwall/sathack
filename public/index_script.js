var socket = io();

// $( document ).ready(function() {
//   // Handler for .ready() called.
//    socket.emit('pageload', 'message');
// });

// When the user clicks on send button
// $('.meetup').click(function(){
//  	socket.emit('message', " is available to " + $(this).text().toLowerCase());
// });

// When we receive a user message, add to html list
socket.on('user-message', function(msg) {
  var new_msg = $('<div class="panel-body">').text(msg);
  var join_button = $('<button>').text("Join!");
  $(join_button).addClass("join-button");
  // !!! Want to send a customized message built from same components as original msg
  $(join_button).click( function() { joinButtonClicked(msg); });
  new_msg.append(join_button);
  $('#events').append(new_msg);
  $('body.html').animate({scrollTop: $('#messages li:last-child').offset().top + 5 + 'px'}, 5);
});