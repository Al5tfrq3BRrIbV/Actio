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

	var editToDo = function() {
		var newCheckBox=$('<input type="checkbox">');
		var newText=$(".edit input").val();
		document.getElementById("1").innerHTML=newCheckBox + " " + newText;
		$(".edit input").val("");
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
		editToDo();
	});

	$(".edit input").on("keypress", function (event) {
		if(event.keyCode === 13) {
			editToDo();
		}
	});

};

$(document).ready(main);

function addNew() {

            // Get the main Div in which all the other divs will be added
            var mainContainer = document.getElementById('mainContainer');

            // Create a new div for holding text and button input elements
            var newDiv = document.createElement('div');

            // Create a new text input
            var newDropdown = document.createElement('select');

            newDropdownOption = document.createElement("option");
            newDropdownOption.value = "value1";
            newDropdownOption.text = "option 1";

            newDropdown.add(newDropdownOption);

            // Create buttons for creating and removing inputs
            var newAddButton = document.createElement('input');
            newAddButton.type = "button";
            newAddButton.value = " + ";

            var newDelButton = document.createElement('input');
            newDelButton.type = "button";
            newDelButton.value = " - ";

            // Append new text input to the newDiv
            newDiv.appendChild(newDropdown);

            // Append new button inputs to the newDiv
            newDiv.appendChild(newAddButton);
            newDiv.appendChild(newDelButton);

            // Append newDiv input to the mainContainer div
            mainContainer.appendChild(newDiv);

            // Add a handler to button for deleting the newDiv from the mainContainer
            newAddButton.onclick = addNew;

            newDelButton.onclick = function() {
                    mainContainer.removeChild(newDiv);
            };
        }