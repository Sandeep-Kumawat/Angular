import { Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { LogService } from '../log.service';
import { APIKEY } from '../Value';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  //providers:[LogService]
})
export class Child2Component implements OnInit {
   
  message:string;
  apikey:any;
  constructor(private logservice : LogService,@Inject(APIKEY) a) { 
    this.apikey=a;
    console.log(this.apikey);
  }

  ngOnInit(): void {
    this.message=this.logservice.sayHello("Child 2");
  }
  
}
