var displayToDo = function (toDo, locationSection){
    //var newCheckBox = $('<input type="checkbox">');
    var newButton = $('<button class="delete" onclick="delete()">').text("X");
    buttonEvents(newButton);
    if(toDo.done===1){
        var classDone="done";
    }
    else{
        var classDone="todo";
    }
    var newToDo = $('<p class="'+classDone+'" data-due="'+toDo.dueDate+'" data-priority="'+toDo.priority+'">').text(toDo.text).append(newButton)/*.prepend(newCheckBox)*/;
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

function avgToDosPerUser(nrOfToDos, nrOfUsers){
    return nrOfToDos/nrOfUsers;
}

