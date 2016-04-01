import { ITodoItem } from "./TodoItem";
import { TodoListService, ITodoListService } from "./TodoListService";
import { Component, bind, Inject } from "angular2/core";
// maybe grabbing everything is better!
import * as Angular2 from "angular2/core";

@Component({
    selector: "todo-list",
    templateUrl: "app/todolist.html",
    properties: ["todos"]
	/* interfaces do not work here?
	bindings: [
		bind(ITodoListService).toClass(TodoListService)
	]
	*/
})
export class TodoList {

    todos: ITodoItem[];

    constructor(
        @Inject(TodoListService)
        private todoListService: ITodoListService
    ) {
        this.todos = todoListService.todos;
    }

    addTodo(task: string): void {
        this.todoListService.addTodo(task);
    }

    removeTodo(id: number): void {
        // ask for confirmation
        if (confirm("Do you really want to delete task: " + id + "?")) {
            this.todoListService.removeTodo(id);
        }
    }
}