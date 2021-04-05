import { Component, OnInit } from '@angular/core';
import { LogService } from '../log.service';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.css']
})
export class FeatureComponent implements OnInit {

   message:string;
  constructor(private logservice : LogService) { }

  ngOnInit(): void {
    this.message=this.logservice.sayHello("Feature Module");
  }

}
