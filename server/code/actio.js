var main = function() {
	"use strict";
	
	var firstTodo = new ToDo(undefined, "name1", 3, "date1", 1, "user1", "category1");
	var secondTodo = new ToDo(undefined, "name2", 1, "date1", 0, "user1", "category1");
	var thirdTodo = new ToDo(undefined, "name3", 2, "date1", 0, "user1", "category1");

	displayToDo(firstTodo, ".todos");

	var toDoList1 = new ToDoList("category1");
	toDoList1.list.push(secondTodo);
	toDoList1.list.push(thirdTodo);

	/*getToDoList(toDoList1);

	displayToDoList(toDoList1, ".todos");*/

	function f(done, toDoList, location){
		getToDoList(toDoList);
		done(toDoList, location);
	}

	f(displayToDoList, toDoList1, ".todos");
};

/*var addToDo = function(toDos) {
	if($(".add input").val() !==""){
		cleanup();
		var newCheckBox = $('<input type="checkbox">');
		var newButton = $("<button>").text("X");
		buttonEvents(newButton);
		var newToDo = $("<p>").text(" " + $(".add input").val() + " ").append(newButton).prepend(newCheckBox);
		$(".comments").append(newToDo);
		$(".add input").val("");
	}
};

var editToDo = function(toDos) {
	cleanup();
	if($(".comments input").prop('checked')){
		$(".comments input").filter('checked').parent().remove();
		addToDo(toDos);
	}
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
}*/

$(document).ready(main);