function addTodo() {
	var todoList = document.getElementById('todoList');
	var newDiv = document.createElement('div');
	var newDropdown = document.createElement('div');

	var newAddButton = document.createElement('input');
    newAddButton.type = "button";
    newAddButton.value = " + ";

    var newDelButton = document.createElement('input');
    newDelButton.type = "button";
    newDelButton.value = " - ";

    newDiv.appendChild(newAddButton);
    newDiv.appendChild(newDelButton);

    todoList.appendChild(newDiv);

    newDelButton.onclick = function () {
    	todoList.removeChild(newDiv);
    };
}