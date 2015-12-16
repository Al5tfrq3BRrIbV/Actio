function ToDo(id, text, priority, dueDate, done, user) {

	this.id = id;
	this.text = text;
	this.priority = priority;
	this.dueDate = dueDate;
	this.done = done;
	this.user = user;

};

function ToDoList(category) {
	this.category = category;
	this.list = [];
}