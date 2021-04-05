import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {
  
  private static count=0;
  constructor() {
    LogService.count=LogService.count+1;
    console.log("Object Created of Log Service: "+LogService.count);
   }
   sayHello(name:string)
   {
     return "Hello"+name;
   }
}
