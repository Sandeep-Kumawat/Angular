import { OnDestroy } from '@angular/core';
import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppService } from './app.service';
import { TodoItem } from './TodoItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'TodoProduct';
  todoitems : TodoItem[] = [];
  itemsubscription : Subscription;
  constructor(private appservice : AppService)
  {
    this.itemsubscription=new Subscription();
  }
  ngOnInit(){
    this.itemsubscription = this.appservice.getTodoItem().subscribe(
      data=>{
        this.todoitems=data;
      },
      error=>{
        console.log(error);
      },
      ()=>console.log("complete")
    )
  }
  ngOnDestroy(){
    if(this.itemsubscription)
    {
      this.itemsubscription.unsubscribe();
    }
  }
}
