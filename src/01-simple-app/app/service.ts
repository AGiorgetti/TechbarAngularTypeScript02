import * as ng2 from "angular2/core";

// technically not needed (because this service does not have dependencies that need to be injected)
// we add it for consistency (mark every service) and to allow TypeScript to generate constructor parameter metadata
@ng2.Injectable() 
export class Service {
    
    private static instance: number = 0;
    title: string;
    private id: number;
    
    constructor() {
        this.id = ++Service.instance;
        this.title = "Service Instance: " + this.id;
    }
}
