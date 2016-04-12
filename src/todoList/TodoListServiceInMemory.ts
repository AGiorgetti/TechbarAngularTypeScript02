import { ITodoListService, ITodoItem, TodoItem  } from "./TodoItem";

/**
 * a Service used to manage the todo items
 * 
 * immagine this is going to interact with an external service
 */
export class InMemoryTodoListService implements ITodoListService {

    todos: ITodoItem[] = [];

    private _idSeed = 0;

    /**
     * adds a new task to the list!
     */
    addTodo(task: string): void {
        let newItem = new TodoItem(this.getNextId(), task);
        this.todos.push(newItem);
    }

    /**
     * removes a task from the list
     */
    removeTodo(id: number): void {
        for (let i = 0; i < this.todos.length; i++) {
            if (this.todos[i].id === id) {
                this.todos.splice(i, 1);
                return;
            }
        }
    }
    
    private getNextId() {
        return this._idSeed++;
    }
}
