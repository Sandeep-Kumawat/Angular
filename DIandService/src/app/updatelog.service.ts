import { Injectable } from '@angular/core';

@Injectable()
export class UpdatelogService {
  private static count=0;
  constructor() {

    UpdatelogService.count=UpdatelogService.count+1;
    console.log("Update Log Service Object Created: "+UpdatelogService.count);
   }
   sayHello(name:string)
   {
     return "Hello Updated"+name;
   }
   welcome(name:string)
   {
     return "Welcome in Taazaa "+name;
   }
}
