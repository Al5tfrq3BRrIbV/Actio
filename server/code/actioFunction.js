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
	$.get("/todo/request", $.proxy(toDoList.readToDoList, toDoList));
}

function getToDoListByCategory(toDoList, location, category){
    $.get("/todo/request/category" + "?category=" + category, $.proxy(toDoList.readToDoList, toDoList));
}

function getToDoListByUser(toDoList, location, user){
    $.get("/todo/request/category" + "?user=" + user, $.proxy(toDoList.readToDoList, toDoList));
}

function displayToDoList(toDoList, locationSection){
	toDoList.list.forEach(function(toDoIn){
		displayToDo(toDoIn, locationSection)
	});
}

function uploadToDo(toDo){
    var objectAsUrl = "?id=" + toDo.id + "&text=" +toDo.text
        + "&priority=" + toDo.priority + "&dueDate=" + toDo.dueDate
        + "&done=" + toDo.done + "&user=" + toDo.user + "&category=" + toDo.category;
    $.get("/todo/add" + objectAsUrl, console.log());
}

function updateToDo(toDo){
    var objectAsUrl = "?id=" + toDo.id + "&text=" +toDo.text
        + "&priority=" + toDo.priority + "&dueDate=" + toDo.dueDate
        + "&done=" + toDo.done + "&user=" + toDo.user + "&category=" + toDo.category;
    $.get("/todo/update" + objectAsUrl, console.log());
}

function deleteToDo(toDo){
    $.get("/todo/delete" + "?id=" + toDo.id, console.log());
}

function deleteToDoById(id){
    $.get("/todo/delete" + "?id=" + id, console.log());
}

function getAndDisplay(toDoList, location) {
    function callBack(toDoList, location){
        displayToDoList(toDoList, location)
    }
    getToDoList(toDoList, callBack(toDoList, location));
}