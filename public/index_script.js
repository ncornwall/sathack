var socket = io();

// When the user clicks on send button
$('.meetup').click(function(){
  socket.emit('message', " is available to " + $(this).text().toLowerCase());
});

// // Or the user presses enter from the text box
// $('#msg').keydown(function(event) {
//   if (event.keyCode == 13) {
//     sendMessage();
//   }
// });

// var sendMessage = function() {
//   socket.emit('message', $('#msg').val());
//   $('#msg').val('');
// };

// When we receive a user message, add to html list
socket.on('user-message', function(msg) {
  var new_msg = $('<li>').text(msg);


  var join_button = $('<button>').text("Join!");
  $(join_button).addClass("join-button");
  // !!! Want to send a customized message built from same components as original msg
  $(join_button).click( function() { joinButtonClicked(msg); });
  new_msg.append(join_button);


  $('#messages').append(new_msg);
  $('body.html').animate({scrollTop: $('#messages li:last-child').offset().top + 5 + 'px'}, 5);
});