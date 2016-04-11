import * as ng2 from "angular2/core";

// The decorator is not technically needed (because this service does not have dependencies that need to be injected)
// It will  allow TypeScript to generate constructor parameter metadata that Angular will use for D.I.
// We add it anyway for consistency (mark every service) 
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
