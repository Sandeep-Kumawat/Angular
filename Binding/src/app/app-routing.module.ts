import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsyncComComponent } from './async-com/async-com.component';
import { BehaviorComComponent } from './behavior-com/behavior-com.component';
import { DirectiveDemoComponent } from './directive-demo/directive-demo.component';
import { GlobalErrorComponent } from './global-error/global-error.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { ReplayComComponent } from './replay-com/replay-com.component';
import { RxJsComponent } from './rx-js/rx-js.component';
import { ShareDataComponent } from './share-data/share-data.component';
import { SubjectComComponent } from './subject-com/subject-com.component';
import { TshirtdatabindingComponent } from './tshirtdatabinding/tshirtdatabinding.component';
const routes: Routes = [
        {path: "", redirectTo:"home", pathMatch:"full"},
        {path:"data-binding", component:TshirtdatabindingComponent},
        {path:"Product", component:ProductComponent},
        {path:"MasterDetails", component:PurchaseComponent},
        {path:"ShareData", component:ShareDataComponent},
        {path:"directive", component:DirectiveDemoComponent},
        {path:"home", component:HomeComponent},
        {path:"errorHandler", component:GlobalErrorComponent},
        {path:"login", component:LoginComponent},
        {path:"rxjs", component:RxJsComponent},
        {path:"subject", component:SubjectComComponent},
        {path:"behavior", component:BehaviorComComponent},
        {path:"replay", component:ReplayComComponent},
        {path:"async", component:AsyncComComponent}
    

        
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }