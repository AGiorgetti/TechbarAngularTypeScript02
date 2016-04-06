import * as ng2 from "angular2/core";
import { Control } from "./control";
import { Service } from "./service";

@ng2.Component({
    directives: [Control],
    selector: "demo-main",
    template: "<div><h1>{{title}}</h1><demo-control></demo-control><demo-control></demo-control></div>",
})
export class Main {

    public title: string;

    constructor(
        private service: Service
    ) {
        this.title = "Main Component" + " - " + service.title;
    }
}
