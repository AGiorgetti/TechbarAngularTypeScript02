import { ITodoItem } from "./TodoItem";
import { TodoListService, ITodoListService } from "./TodoListService";
import { Component, Inject } from "angular2/core";

@Component({
    selector: "todo-list",
    templateUrl: "todoList/todolist.html"
})
export class TodoList {

    todos: ITodoItem[];

    constructor(
        @Inject(TodoListService) // interfaces do not work for injection: they disappear at runtime and ng2 has no metadata to look for.
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
