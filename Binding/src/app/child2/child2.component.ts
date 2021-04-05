import { Component, OnInit } from '@angular/core';
import { IProduct } from '../product/IProduct';
import { SharedataService } from '../sharedata.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

  constructor(private shareData:SharedataService) { }
  p:IProduct;
  ngOnInit(): void {
  this.shareData.product$.subscribe(c=>{
    this.p=c;
  })
  }
  
}
