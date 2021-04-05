import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tshirtdatabinding',
  templateUrl: './tshirtdatabinding.component.html',
  styleUrls: ['./tshirtdatabinding.component.css']
})
export class TshirtdatabindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title = "T-Shirts Design";
a = 300;
b = 300;
imgSource = '../assets/front.jpg';

changeTshirtMouseEnter()
{
  this.imgSource = '../assets/back.jpg';
}
changeTshirtMouseExit():void

{
  this.imgSource = '../assets/front.jpg';
}
 
 fun():void{
   if(this.a <= 0){
     this.a = 0;
   }
   if(this.b <= 0){
    this.b = 0;
  }
 }
}
