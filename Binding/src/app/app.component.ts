import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Demo';
  showDataBindingDemo = true;
  showDirectiveDemo = false;
  showdbdemo():void{
    this.showDataBindingDemo = true;
    this.showDirectiveDemo = false;
  }
  showdirecyivedemo():void{
    this.showDataBindingDemo = false;
    this.showDirectiveDemo = true;
  }

}
