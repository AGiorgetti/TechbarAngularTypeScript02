import * as ng2 from "angular2/core";

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
