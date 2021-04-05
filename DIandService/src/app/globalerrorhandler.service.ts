import { ErrorHandler, Injectable } from '@angular/core';

@Injectable()
export class GlobalerrorhandlerService implements ErrorHandler{

  constructor() { }
  handleError(error){
    console.log("There is no Error in app");
  }
}
