import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { LogService } from './log.service';
import { UpdatelogService } from './updatelog.service';
import { Child3Component } from './child3/child3.component';
import { GlobalerrorhandlerService } from './globalerrorhandler.service';
import { APIKEY } from './Value';
import { FeatureModule } from './feature/feature.module';
var configvalue=29;
var getLogObject=()=>{
  if(configvalue==9)
  {
    return new LogService();
  }
  else{
    return new UpdatelogService();
  }
  //{provide:LogService,useFactory:getLogObject}
}
@NgModule({
  declarations: [
    AppComponent,
    Child1Component,
    Child2Component,
    Child3Component
  ],
  imports: [
    BrowserModule,
    FeatureModule
  ],
  providers: [{provide:LogService,useClass:LogService},{provide:UpdatelogService,useExisting:LogService},
               {provide:ErrorHandler,useClass:GlobalerrorhandlerService},{provide:APIKEY,useValue:{apikey:"123456"}}],
  bootstrap: [AppComponent]
})
export class AppModule { }
