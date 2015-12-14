var main = function() {
	"use strict";

	var firstTodo = new ToDo("name1", "date1", false, false);
	var secondTodo = new ToDo("name2", "date2", false, false);
	var thirdTodo = new ToDo("name3", "date3", true, false);

	displayToDo(firstTodo, ".toDoList1");
	displayToDo(secondTodo, ".toDoList1 .subToDoList1");
	displayToDo(thirdTodo, ".toDoList1 .subToDoList2");


};

$(document).ready(main);