import * as ng2 from "angular2/core";
import { Service } from "./service";

@ng2.Component({
    selector: "demo-control",
    template: "<h2>{{title}}</h2>"
    // providers: [Service], // register a provider for the service in the injector of this component
})
export class ControlComponent {
    
    private static instance: number = 0;
    title: string;
    private id: number;
    
    constructor(
        private service: Service                
    ) {
        this.id = ++ControlComponent.instance;
        this.title = "Control Instance: " + this.id + " - " + service.title;
    }    
}
