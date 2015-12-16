var displayToDo = function (toDo, locationSection){
    var newCheckBox = $('<input type="checkbox">');
    var newButton = $("<button>").text("X");
    buttonEvents(newButton);
    var newToDo = $("<p>").text(toDo.name + " " + toDo.dueDate).append(newButton).prepend(newCheckBox);
    $(locationSection).append(newToDo);
};

function buttonEvents(el){
    $(el).click(function (event) {
        $(this).parent().remove();
    });
};

function getToDoList(){
	$.get("/request/todos", function(jsonInput) {
		return JSON.parse(jsonInput);
	}
	console.log("Getting toDoList from server.");
};

function readToDoList(toDoList, dataIn){
	dataIn.forEach(function(toDoIn){
		toDoList.list.push(new ToDo(toDoIn.text, toDoIn.dueDate, toDoIn.priority, toDoIn.done, toDoIn.id));
	});
	console.log("Interpreting toDoList");
};

function displayToDoList = function (toDoList, locationSection){
	toDoList.forEach(function(toDoIn){
		displayToDo(toDoIn, locationSection);
	});
};