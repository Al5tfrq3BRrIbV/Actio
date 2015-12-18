$.proxy(function(){console.log(this.a);}, {a: 15})();

(function(a){
    return function(b){
        console.log(a+b);
    };
})(15)


$.get("/todo/request", $.proxy(toDoList.readToDoList, toDoList));