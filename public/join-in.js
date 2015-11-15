/*
This script enables users to click "Join!" on an existing event post, to post a Reply
 */
var socket = io();


/*
 Clicking any "Join!" button emits a new reply
 */
function joinButtonClicked(msg) {
    console.log("Join! was clicked");
    socket.emit('reply', "A surprise guest will join: " + msg);
}


/*
 Clicking any "Join!" button creates a new post
 */
socket.on('reply', function(msg) {
    var new_reply = $('<div class="panel-body">').text(msg);
    $('#replies').append(new_reply);
    $('body.html').animate({scrollTop: $('#replies li:last-child').offset().top + 5 + 'px'}, 5);
});
