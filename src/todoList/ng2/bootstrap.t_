// Angular bootstrapping module
import { bootstrap } from "angular2/platform/browser";

// to have Http working, we need to import some Rx operators
// https://github.com/angular/angular/issues/5632#issuecomment-167026172
// this is a demo, so we import everything!
import "rxjs/Rx";
import { HTTP_BINDINGS } from "angular2/http";

// import our main component and services that need to be resolved as singletons
import { TodoList } from "./TodoList";
import { TodoListService } from "./TodoListService";
import { InMemoryTodoListService } from "./TodoListServiceInMemory";

// let everything come to life!
bootstrap(TodoList, [HTTP_BINDINGS, TodoListService, InMemoryTodoListService]);
