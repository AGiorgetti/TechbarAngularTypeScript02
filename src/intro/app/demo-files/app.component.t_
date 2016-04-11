import * as ng2 from "angular2/core";
import { ControlComponent } from "./control.component";
import { Service } from "./service";

@ng2.Component({
    directives: [ControlComponent],
    selector: "demo-app",
    template: "<div><h1>{{title}}</h1><demo-control></demo-control><demo-control></demo-control></div>"
})
export class AppComponent {

    public title: string;

    constructor(
        private service: Service
    ) {
        this.title = "App Component" + " - " + service.title;
    }
}
