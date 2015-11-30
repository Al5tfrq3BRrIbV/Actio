var main = function() {
	"use strict";

	var toDos = 4;

	var addToDo = function(toDos) {
		if($(".add input").val() !==""){
			cleanup();
			var newCheckBox = $('<input type="checkbox">');
			var newButton = $("<button>").text("X");
			buttonEvents(newButton);
			var newToDo = $("<p data-id='" + toDos + "'>").text(" " + $(".add input").val() + " ").append(newButton).prepend(newCheckBox);
			$(".comments").append(newToDo);
			$(".add input").val("");
			toDos++;
			/*cleanup();
			var toDo = new toDo($(".add input").val(),1,"01/01/2001");
			var newCheckBox = $('<input type="checkbox">');
			var newButton = $("<button>").text("X");
			buttonEvents(newButton);
			var newToDo = $("<p data-id='" + toDos + "'>").text(" " + toDo.toString() + " ").append(newButton).prepend(newCheckBox);
			$(".comments").append(newToDo);
			$(".add input").val("");
			toDos++;*/
		}
	};

	var editToDo = function(toDos) {
		/*var newCheckBox=$('<input type="checkbox">');
		var newText=$(".edit input").val();
		var i = 0;
		while(i<toDos)
		{
			if(document.getElementById("box"+i).checked)
			{
				document.getElementById(i).innerHTML=newCheckBox + " " + newText;
				$(".edit input").val("");
			}
			i++;
		}*/
		cleanup();
		if($(".comments input").prop('checked'))
		{
			$(".comments input").filter('checked').parent().remove();
			addToDo(toDos);
		}
		else
		{
			document.getElementById("editmessage").innerHTML="Select the items to be edited";
		}
	}

	$(".add button").on("click", function (event) {
		addToDo(toDos);
	});

	$(".add input").on("keypress", function (event) {
		if(event.keyCode === 13) {
			addToDo(toDos);
		}
	});

	function buttonEvents(el){
		$(el).click(function (event) {
			$(this).parent().remove();
		});
	}

	buttonEvents($(".comments button"));

	$(".edit button").click(function (event) {
		editToDo(toDos);
	});

	$(".edit input").on("keypress", function (event) {
		if(event.keyCode === 13) {
			editToDo(toDos);
		}
	});

	function cleanup(){
		document.getElementById("editmessage").innerHTML="";
	};

};

$(document).ready(main);


function toDo(name, importance, deadline)
{
	this.name = name;
	this.importance = importance;
	this.deadline = deadline;
	this.done = false;

	this.setName = function(n)
	{
		this.name = n;
	};

	this.setImportance = function(i)
	{
		this.importance = i;
	};

	this.setDeadline = function(d)
	{
		this.deadline = d;
	};

	this.setDone = function()
	{
		this.done = true;
	};

	this.getName = function()
	{
		return this.name;
	};

	this.getImportance = function()
	{
		return this.importance;
	};

	this.getDeadline = function()
	{
		return this.deadline;
	};

	this.getDone = function()
	{
		return this.done;
	};

	this.toString = function()
	{
		var string;
		if(this.done === false)
		{
			string = "To do: ";
		}
		else
		{
			string = "Done: ";
		}
		string = string + this.name + "; Importance: " + this.importance + "; Deadline: " + this.deadline;
	};
}

