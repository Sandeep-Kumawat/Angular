import { ErrorHandler, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyErrorHandlerService implements ErrorHandler{

  constructor() { }
  handleError(error: any): void {
    console.log("I will handle error by myself");
  }
}
