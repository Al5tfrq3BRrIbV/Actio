function ToDo(id, text, priority, dueDate, done, user, category) {
	this.id = id;
	this.text = text;
	this.priority = priority;
	this.dueDate = dueDate;
	this.done = done;
	this.user = user;
	this.category = category;
}

function ToDoList(category) {
	this.category = category;
	this.list = [];
	this.readToDoList = function(dataIn) {
		JSON.parse(dataIn).forEach( $.proxy(function (toDoIn) {
			if(!this.checkExists(toDoIn.id)) {
				this.list.push(new ToDo(toDoIn.id, toDoIn.text, toDoIn.priority, toDoIn.dueDate, toDoIn.done, toDoIn.user, toDoIn.category));
			}
		}, this))
	}
	this.checkExists = function(id) {
		for(i=0;i<this.list.length;i++){
			if(id === this.list[i].id) return true;
		}
		return false;
	}
}