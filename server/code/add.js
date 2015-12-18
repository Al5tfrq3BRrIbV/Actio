var add = function(event) {
	if($("input.title").val() && $("input.date").val() && $("input.category").val()){
		var newToDo = new ToDo(undefined,$("input.title").val(),$("input[name=priority]:checked").val(),$("input.date").val(),0,"user1",$("input.category").val());
		uploadToDo(newToDo);
	}
};

$(".addToDos input").on("keypress", function (event) {
	if(event.keyCode === 13) {
		add();
	}
});

