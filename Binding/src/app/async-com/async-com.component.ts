import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AsyncService } from '../async.service';

@Component({
  selector: 'app-async-com',
  templateUrl: './async-com.component.html',
  styleUrls: ['./async-com.component.css']
})
export class AsyncComComponent implements OnInit, OnDestroy {

  title = 'Async Subjects Demo';
  observer1$: Subscription;
  observer2$: Subscription;
  observer3$: Subscription;
  observer1 = [];
  observer2 = [];
  observer3 = [];
  showObserver1 = false;
  showObserver2 = false;
  showObserver3 = false;
  
  constructor(private asyncservice : AsyncService) {

  }

  subscribe1() {
    this.asyncservice.count$.subscribe(
      data => { this.observer1.push(data) },
      null,
      () => { this.showObserver1 = true; }
    )
  }
  susbcribe2() {
    this.asyncservice.count$.subscribe(
      data => { this.observer2.push(data) },
      null,
      () => { this.showObserver2 = true; }
    )
  }
  susbcribe3() {
    this.asyncservice.count$.subscribe(
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
