var displayToDo = function (toDo, locationSection){
    var newCheckBox = $('<input type="checkbox">');
    var newButton = $("<button>").text("X");
    buttonEvents(newButton);
    var newToDo = $("<p>").text(toDo.text + " " + toDo.dueDate).append(newButton).prepend(newCheckBox);
    $(locationSection).append(newToDo);
};

function buttonEvents(el){
    $(el).click(function (event) {
        $(this).parent().remove();
    });
}

function getToDoList(toDoList){
	$.get("/request/todos", toDoList.read);
	console.log("Getting toDoList from server.");
}

function readToDoList(toDoList, dataIn) {
	dataIn.forEach(function (toDoIn) {
		toDoList.list.push(new ToDo(toDoIn.id, toDoIn.text, toDoIn.priority, toDoIn.dueDate, toDoIn.done, toDoIn.user));
	});
	console.log("Interpreting toDoList");
}

function displayToDoList(toDoList, locationSection){
	toDoList.forEach(function(toDoIn){
		displayToDo(toDoIn, locationSection)
	});
	console.log("Done displaying");
}