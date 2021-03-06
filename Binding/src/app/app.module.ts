import { ErrorHandler, NgModule } from '@angular/core';
import { FormGroupName, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {MatTableModule} from '@angular/material/table';

import { AppComponent } from './app.component';
import { TshirtdatabindingComponent } from './tshirtdatabinding/tshirtdatabinding.component';
import { HelloComponent } from './hello/hello.component';
import { ProductComponent } from './product/product.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { PurchaseOrderComponent } from './purchase-order/purchase-order.component';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatExpansionModule} from '@angular/material/expansion';
import { MyErrorHandlerService } from './my-error-handler.service';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { SharedataService } from './sharedata.service';
import { ShareDataComponent } from './share-data/share-data.component';
import { ChangeColorDirective } from './change-color.directive';
import { DirectiveDemoComponent } from './directive-demo/directive-demo.component';
import { HomeComponent } from './home/home.component';
import { GlobalErrorComponent } from './global-error/global-error.component';
import { LoginComponent } from './login/login.component';
import { ProductSearchPipe } from './product-search.pipe';
import { ProductPricePipe } from './product-price.pipe';
import { RxJsComponent } from './rx-js/rx-js.component';
import { SubjectComComponent } from './subject-com/subject-com.component';
import { BehaviorComComponent } from './behavior-com/behavior-com.component';
import { ReplayComComponent } from './replay-com/replay-com.component';
import { AsyncComComponent } from './async-com/async-com.component';
@NgModule({
  declarations: [
    AppComponent,
    TshirtdatabindingComponent,
    HelloComponent,
    ProductComponent,
    PurchaseComponent,
    PurchaseOrderComponent,
    Child1Component,
    Child2Component,
    ShareDataComponent,
    ChangeColorDirective,
    DirectiveDemoComponent,
    HomeComponent,
    GlobalErrorComponent,
    LoginComponent,
    ProductSearchPipe,
    ProductPricePipe,
    RxJsComponent,
    SubjectComComponent,
    BehaviorComComponent,
    ReplayComComponent,
    AsyncComComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    RouterModule,
    AppRoutingModule,
    MatTableModule,
    ReactiveFormsModule

  ],
  providers: [{provide:ErrorHandler,useClass:MyErrorHandlerService},
               {provide:SharedataService,useClass:SharedataService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
