// Angular bootstrapping module
import { bootstrap } from "angular2/platform/browser";

// import Components and Services from our applicarion modules
import { AppComponent } from "./app.component";
import { Service } from "./service";

// let everything come to life!
bootstrap(AppComponent, [Service]); 
