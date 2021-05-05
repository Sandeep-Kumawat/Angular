import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'data-binding';
  a:string='Sandeep';
  x:number;
  y:number;
 
  setSize(){
    this.x=300;
    this.y=300;
  }
}
