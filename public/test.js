// ===== Adding functionality for modals
// Event handlers
window.onload = function(){

	$("#studyButton").on('click',function(){
	    var modalBody = document.getElementById('modal-body');
	    var modalFooter = document.getElementById('modal-footer');
	  	console.log("there");
	});

	createModalTable();
};


function createModalTable(){
var modalBody = document.getElementById('modal-body');

}

$(".saveChanges").on("click", function(){
var name = document.getElementById("name").value;
var desc = document.getElementById("desc").value;
var startTime = document.getElementById("startTime").value;
var endTime = document.getElementById("endTime").value;
var act = document.getElementById("act").value; 
var form = document.getElementById("myForm");

console.log(name, desc, act, startTime, endTime);

var socket = io();
socket.emit('message', "@" + name + ": " + desc + "  " + "Time: " + startTime + " - " + endTime + " Activity: " + act);
form.reset();
});