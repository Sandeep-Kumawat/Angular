import { Component, OnInit } from '@angular/core';
import { SharedataService } from '../sharedata.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {
   data:number;
  constructor(private sharedata: SharedataService) { }

  ngOnInit(): void {
    
  }
  setPrice(){
    this.sharedata.setPrice(this.data);
  }
  
}
