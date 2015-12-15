function ToDo(name, dueDate, importance, done, id) {

	this.name = name;
	this.dueDate = dueDate;
	this.importance = importance;
	this.done = done;
	this.id = id;

};

function ToDoList(category) {
	this.category = category;
	this.list = [];
}