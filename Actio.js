var main = function() {
	"use strict";

	var toDos = 4;

	var addToDo = function(toDos) {
		//var newButton = $("<button>").text("X");
		var newButton = $('<input type="button" value="new button"/>');
		var newToDo = $("<p id='" + toDos + "'>").text($(".add input").val() + " " + newButton);
		$(".comments").append(newToDo);
		$(".add input").val("");
		toDos = toDos + 1;
	};

	var editToDo = function(toDos) {
		var newCheckBox=$('<input type="checkbox">');
		var newText=$(".edit input").val();
		var i = 0;
		while(i<toDos)
		{
			if(document.getElementById("box"+i).checked)
			{
				document.getElementById(i).innerHTML=newCheckBox + " " + newText;
				$(".edit input").val("");
			}
			i++;
		}
	}

	$(".add button").on("click", function (event) {
		addToDo(toDos);
	});

	$(".add input").on("keypress", function (event) {
		if(event.keyCode === 13) {
			addToDo(toDos);
		}
	});

	$(".comments button").on("click", function (event) {
		var id = event.target.id;
		//document.getElementById("4").innerHTML="Hij doet het";
		//var elem = document.getElementById("2").innerHTML="";
		document.getElementById(id).setAttribute("hidden","hidden");

	});

	$(".edit button").on("click", function (event) {
		editToDo(toDos);
	});

	$(".edit input").on("keypress", function (event) {
		if(event.keyCode === 13) {
			editToDo(toDos);
		}
	});

};

$(document).ready(main);

