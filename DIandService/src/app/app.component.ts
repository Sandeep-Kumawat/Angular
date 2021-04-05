import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DIandService';
  url=undefined;
  data:string;
  sendData(){
    this.data=this.url.indexof();
  }
}
