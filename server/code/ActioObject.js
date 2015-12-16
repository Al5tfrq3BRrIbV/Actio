function ToDo(id, text, priority, dueDate, done, user) {
	this.id = id;
	this.text = text;
	this.priority = priority;
	this.dueDate = dueDate;
	this.done = done;
	this.user = user;
}

function ToDoList(category) {
	this.category = category;
	this.list = [];
	this.readToDoList = function(dataIn) {
		console.log(JSON.parse(dataIn));
		JSON.parse(dataIn).forEach( $.proxy( function (toDoIn) {
			this.list.push(new ToDo(toDoIn.id, toDoIn.text, toDoIn.priority, toDoIn.dueDate, toDoIn.done, toDoIn.user));
		}), this );
		console.log("Interpreting toDoList");
	}
}