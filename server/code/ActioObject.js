function ToDo(name, dueDate, importance, done, id, user) {

	this.name = name;
	this.dueDate = dueDate;
	this.importance = importance;
	this.done = done;
	this.id = id;
	this.user = user;

};

function ToDoList(category) {
	this.category = category;
	this.list = [];
}