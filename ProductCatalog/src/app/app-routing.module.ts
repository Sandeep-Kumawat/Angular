import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoryComponent } from './add-category/add-category.component';
import { AddProductComponent } from './add-product/add-product.component';
import { CategoryComponent } from './category/category.component';
import { DeleteACategoryComponent } from './delete-acategory/delete-acategory.component';
import { DeleteAProductComponent } from './delete-aproduct/delete-aproduct.component';
import { HomeComponent } from './home/home.component';
import { ListOfAllCategoriesComponent } from './list-of-all-categories/list-of-all-categories.component';
import { ListOfAllProductsComponent } from './list-of-all-products/list-of-all-products.component';
import { ProductComponent } from './product/product.component';
import { SearchACategoryComponent } from './search-acategory/search-acategory.component';
import { SearchAProductComponent } from './search-aproduct/search-aproduct.component';

const routes: Routes = [
  {path: "", redirectTo:"home", pathMatch:"full"},
  {path:"Category",component:CategoryComponent},
  {path:"Product",component:ProductComponent},
  {path:"home",component:HomeComponent},
  {path:"AddCategory",component:AddCategoryComponent},
  {path:"ListofCategories",component:ListOfAllCategoriesComponent},
  {path:"DeleteCategory",component:DeleteACategoryComponent},
  {path:"SearchCategory",component:SearchACategoryComponent},
  {path:"AddProduct",component:AddProductComponent},
  {path:"ListofProducts",component:ListOfAllProductsComponent},
  {path:"DeleteProduct",component:DeleteAProductComponent},
  {path:"SearchProduct",component:SearchAProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
