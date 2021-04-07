import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppService } from '../app.service';

@Component({
  selector: 'app-rx-js',
  templateUrl: './rx-js.component.html',
  styleUrls: ['./rx-js.component.css']
})
export class RxJsComponent implements OnInit {

  title = 'RxJS Subjects Demo';
  // observer1$: Subscription;
  // observer2$: Subscription;
  // observer3$: Subscription;
  // observer1 = [];
  // observer2 = [];
  // observer3 = [];
  // showObserver1 = false;
  // showObserver2 = false;
  // showObserver3 = false;
  
  constructor(private appservice: AppService) {

  }

  // subscribe1() {
  //   this.appservice.count$.subscribe(
  //     data => { this.observer1.push(data) },
  //     null,
  //     () => { this.showObserver1 = true; }
  //   )
  // }
  // susbcribe2() {
  //   this.appservice.count$.subscribe(
  //     data => { this.observer2.push(data) },
  //     null,
  //     () => { this.showObserver2 = true; }
  //   )
  // }
  // susbcribe3() {
  //   this.appservice.count$.subscribe(
  //     data => { this.observer3.push(data) },
  //     null,
  //     () => { this.showObserver3 = true; }
  //   )
  // }
  // showSubjectDemo= true;
  // showBehaviourSubjectDemo= false;
  // showReplaySubjectDemo= false;
  // showAsyncSubjectDemo= false;
  // showSubject(){
  //   this.showSubjectDemo= true;
  //   this.showBehaviourSubjectDemo= false;
  //   this.showReplaySubjectDemo= false;
  //    this.showAsyncSubjectDemo= false;
  // }
  // showBehaviourSubject(){
  //   this.showSubjectDemo= false;
  //   this.showBehaviourSubjectDemo= true;
  //   this.showReplaySubjectDemo= false;
  //    this.showAsyncSubjectDemo= false;
  // }
  // showReplaySubject(){
    
  //   this.showSubjectDemo= false;
  //   this.showBehaviourSubjectDemo= false;
  //   this.showReplaySubjectDemo= true;
  //    this.showAsyncSubjectDemo= false;
  // }
  // showAsyncSubject(){
  //   this.showSubjectDemo= false;
  //   this.showBehaviourSubjectDemo= false;
  //   this.showReplaySubjectDemo= false;
  //    this.showAsyncSubjectDemo= true;
  // }

   ngOnInit(): void {
  }
  // ngOnDestroy() {
  //   this.observer1$.unsubscribe();
  //   this.observer2$.unsubscribe();
  //   this.observer3$.unsubscribe();
  // }

}
