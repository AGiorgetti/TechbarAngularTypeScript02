// to have Http working, we need to import some Rx operators
// https://github.com/angular/angular/issues/5632#issuecomment-167026172
// this is a demo, so we import everything!
import "rxjs/Rx";
import { bootstrap } from "angular2/platform/browser";
import { HTTP_BINDINGS } from "angular2/http";

import { TodoList } from "./TodoList";
import { TodoListService } from "./TodoListService";

bootstrap(TodoList, [HTTP_BINDINGS, TodoListService]);
