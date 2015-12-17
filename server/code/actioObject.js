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
		JSON.parse(dataIn).forEach( $.proxy( function (toDoIn) {

			this.list.push(new ToDo(toDoIn.id, toDoIn.text, toDoIn.priority, toDoIn.dueDate, toDoIn.done, toDoIn.user, toDoIn.category));
		}), this.toDoList);
		this.display(this.toDoList, this.location);
	}
	this.checkExists = function(id){
		return $.proxy(function(id) {
			console.log(this);
			for(i=0;i<this.list.length;i++){
				if(this.list[i]   === id) return true;
			}
			return false;
		}, this);
	}
}