var add = function(event) {
	console.log("clicked");
	var newToDo = new ToDo(undefined,$("input.title").val(),$("input[name=priority]:checked").val(),$("input.date").val(),0,"user1",$("input.category").val());
	uploadToDo(newToDo);
};

/*$(".confirmAdd").on("click"), function (event) {
	console.log("clicked");
	var newToDo = new ToDo(undefined,$("input.title").val(),$("input[name=priority]:checked").val(),$("input.date").val(),0,"user1",$("input.category").val());
	displayToDo(newToDo,".todos");
};*/