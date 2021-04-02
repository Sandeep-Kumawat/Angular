import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { TshirtdatabindingComponent } from './tshirtdatabinding/tshirtdatabinding.component';
const routes: Routes = [
        {path: "", redirectTo:"data-binding", pathMatch:"full"},
        {path:"data-binding", component:TshirtdatabindingComponent},
        {path:"Product", component:ProductComponent},
        {path:"MasterDetails", component:PurchaseComponent}
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