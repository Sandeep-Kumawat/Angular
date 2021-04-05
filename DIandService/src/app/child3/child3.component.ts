import { Component, OnInit } from '@angular/core';
import { UpdatelogService } from '../updatelog.service';

@Component({
  selector: 'app-child3',
  templateUrl: './child3.component.html',
  styleUrls: ['./child3.component.css']
})
export class Child3Component implements OnInit {

  message:string;
  m1:string;
  constructor(private updatelog: UpdatelogService) { }

  ngOnInit(): void {
    this.message=this.updatelog.sayHello("Child 3");
    this.m1=this.updatelog.welcome("sandeep");
  }

}
