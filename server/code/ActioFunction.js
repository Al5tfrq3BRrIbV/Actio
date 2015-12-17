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
	$.get("/request/todo", $.proxy(toDoList.readToDoList, {toDoList: toDoList, display: displayToDoList, location: location}));
}

function displayToDoList(toDoList, locationSection){
	toDoList.list.forEach(function(toDoIn){
		displayToDo(toDoIn, locationSection)
	});
}

function uploadToDo(toDo){
    var objectAsUrl = "?id=" + toDo.id + "&text=" +toDo.text + "&priority=" + toDo.priority + "&dueDate=" + toDo.dueDate + "&done=" + toDo.done + "&user=" + toDo.user;
    $.get("/add/todo" + objectAsUrl, console.log());
}