import { Component, Inject, OnInit } from '@angular/core';
import { LogService } from '../log.service';
import {  APIKEY } from '../Value';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  //providers:[LogService]
})
export class Child1Component implements OnInit {

   apikey:any;
  constructor(private logservice : LogService,@Inject(APIKEY) a) { 
    this.apikey=a;
    console.log(this.apikey);
  }
  message:string;
  ngOnInit(): void {
    this.message=this.logservice.sayHello("Child 1");
    
  }

}
