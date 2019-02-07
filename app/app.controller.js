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

}
angular.module("todoApp")
.controller("TodoController", TodoController);