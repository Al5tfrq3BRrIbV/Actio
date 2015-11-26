var main = function() {
	"use strict";

	var toDos = 4;

	var addToDo = function(toDos) {
		//var newButton = $("<button>").text("X");
		var newCheckBox = document.createElement('input');
		newCheckBox.type = "checkbox";
		var newButton = document.createElement('button');
		newButton.text = "X";
		//var newToDo = $("<p id='" + toDos + "'>").text($(".add input").val());
		var newToDo = document.createElement('p');
		newToDo.id = toDos;
		newToDo.text = $(".add input").val();
		newToDo.appendChild(newCheckBox);
		newToDo.appendChild(newButton);
		$(".comments").append(newToDo);
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

