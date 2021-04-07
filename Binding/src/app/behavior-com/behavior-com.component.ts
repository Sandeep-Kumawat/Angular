import { OnDestroy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BehaviorService } from '../behavior.service';

@Component({
  selector: 'app-behavior-com',
  templateUrl: './behavior-com.component.html',
  styleUrls: ['./behavior-com.component.css']
})
export class BehaviorComComponent implements OnInit, OnDestroy {

  title = 'Behavior Subjects Demo';
  observer1$: Subscription;
  observer2$: Subscription;
  observer3$: Subscription;
  observer1 = [];
  observer2 = [];
  observer3 = [];
  showObserver1 = false;
  showObserver2 = false;
  showObserver3 = false;
  
  constructor(private behavior : BehaviorService) {

  }

  subscribe1() {
    this.behavior.count$.subscribe(
      data => { this.observer1.push(data) },
      null,
      () => { this.showObserver1 = true; }
    )
  }
  susbcribe2() {
    this.behavior.count$.subscribe(
      data => { this.observer2.push(data) },
      null,
      () => { this.showObserver2 = true; }
    )
  }
  susbcribe3() {
    this.behavior.count$.subscribe(
      data => { this.observer3.push(data) },
      null,
      () => { this.showObserver3 = true; }
    )
  }
 
  ngOnInit(): void {
  }
  ngOnDestroy() {
    
  }

}
