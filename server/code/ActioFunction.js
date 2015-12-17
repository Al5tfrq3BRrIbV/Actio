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

function getToDoList(toDoList, location){
	$.get("/request/todos", $.proxy(toDoList.readToDoList, {a: toDoList, b: displayToDoList, c: location}));
}

function displayToDoList(toDoList, locationSection){
	toDoList.list.forEach(function(toDoIn){
		displayToDo(toDoIn, locationSection)
	});
}