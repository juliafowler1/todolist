"use strict";
function TodoController() {
    //reference point to the object
    const vm = this;
    vm.tasks = [
        {task: "Get gas", completed: true},
        {task: "Buy groceries", completed: true},
        {task: "Cook dinner", completed: false},
        {task: "Get drinks", completed: false}
    ];
vm.add = function(newTask) {
    // console.log("new task")
vm.tasks.push(angular.copy(newTask));
vm.newTodo = {};
}
vm.delete = function(index) {
    vm.tasks.splice(index, 1);
}
vm.completeTask = function(index) {
    let i = index
    vm.tasks[i].completed = true;
}

}
angular.module("todoApp")
.controller("TodoController", TodoController);