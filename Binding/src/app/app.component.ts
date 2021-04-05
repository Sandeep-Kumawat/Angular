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
  showPurchaseDemo = false;
  showDemoChild1=false;
  showDemochild2=false;
  showdbdemo():void{
    this.showDataBindingDemo = true;
    this.showDirectiveDemo = false;
    this.showPurchaseDemo = false;
  }
  showdirecyivedemo():void{
    this.showDataBindingDemo = false;
    this.showDirectiveDemo = true;
    this.showPurchaseDemo = false;
  }
  showPurchase():void{
    this.showPurchaseDemo = true;
    this.showDataBindingDemo = false;
    this.showDirectiveDemo = false;
    
  }
  showData():void{
    this.showDemoChild1=true;
    this.showDemochild2=true;
    this.showDataBindingDemo = false;
    this.showDirectiveDemo = false;
    this.showPurchaseDemo = false;
  }

}
