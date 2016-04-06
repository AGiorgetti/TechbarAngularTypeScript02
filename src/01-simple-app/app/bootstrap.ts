// Angular bootstrapping module
import { bootstrap } from "angular2/platform/browser";

// import Components and Services from our applicarion modules
import { Main } from "./main";
import { Service } from "./service";

// let everything come to life!
bootstrap(Main, [Service]); 
