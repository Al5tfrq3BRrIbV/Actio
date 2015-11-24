var main = function() {
	"use strict";

	var addToDo = function() {
		var newButton = $("<button>").text("X");
		var newToDo = $("<p>").text($(".comment-input input").val() + " " + newButton);
		$(".comments").append(newToDo);
		$(".comment-input input").val("");
	}

	$(".comment-input button").on("click", function (event) {
		addToDo();
	});

	$(".comment-input input").on("keypress", function (event) {
		if(event.keyCode === 13) {
			addToDo();
		}
	});

	$(".comments button").on("click", function (event) {
		
	});

};

$(document).ready(main);

