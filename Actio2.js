var main = function() {
	"use strict";

	var toDos = 4;

	var addToDo = function(toDos) {
		if($(".add input").val() !== ""){
			cleanup();
			var newCheckBox = $('<input type="checkbox">');
			var newButton = $("<button>").text("X");
			buttonEvents(newButton);
			var newToDo = $("<p data-id='" + toDos + "'>").text(" " + $(".add input").val() + " ").append(newButton).prepend(newCheckBox);
			$(".comments").prepend(newToDo);
			$(".add input").val("");
			toDos++;
		}
	};

	var editToDo = function(toDos) {
		cleanup();
		if($(".comments input").prop('checked')){
			$(".comments input").filter('checked').parent().remove();
			addToDo(toDos);
		}
		// Why?
		else{
			document.getElementById("editmessage").innerHTML="Select the items to be edited";
		}
	};

	$(".add button").on("click", function (event) {
		addToDo(toDos);
	});

	$(".add input").on("keypress", function (event) {
		if(event.keyCode === 13) {
			addToDo(toDos);
		}
	});

	function buttonEvents(el){
		$(el).click(function (event) {
			$(this).parent().remove();
		});
	}

	buttonEvents($(".comments button"));

	$(".edit button").click(function (event) {
		editToDo(toDos);
	});

	$(".edit input").on("keypress", function (event) {
		if(event.keyCode === 13) {
			editToDo(toDos);
		}
	});

	function cleanup(){
		document.getElementById("editmessage").innerHTML="";
	};

};

$(document).ready(main);