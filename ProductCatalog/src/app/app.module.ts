import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormGroupName, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { ListOfAllCategoriesComponent } from './list-of-all-categories/list-of-all-categories.component';
import { DeleteACategoryComponent } from './delete-acategory/delete-acategory.component';
import { SearchACategoryComponent } from './search-acategory/search-acategory.component';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CategoryIdPipe } from './category-id.pipe';
import { CategoryNamePipe } from './category-name.pipe';
import { ShortCodePipe } from './short-code.pipe';
import { AddProductComponent } from './add-product/add-product.component';
import { ListOfAllProductsComponent } from './list-of-all-products/list-of-all-products.component';
import { DeleteAProductComponent } from './delete-aproduct/delete-aproduct.component';
import { SearchAProductComponent } from './search-aproduct/search-aproduct.component';
import { ProductIdPipe } from './product-id.pipe';
import { ProductNamePipe } from './product-name.pipe';
import { ProductShortCodePipe } from './product-short-code.pipe';
import { ProductPricePipe } from './product-price.pipe';


@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    ProductComponent,
    HomeComponent,
    AddCategoryComponent,
    ListOfAllCategoriesComponent,
    DeleteACategoryComponent,
    SearchACategoryComponent,
    CategoryIdPipe,
    CategoryNamePipe,
    ShortCodePipe,
    AddProductComponent,
    ListOfAllProductsComponent,
    DeleteAProductComponent,
    SearchAProductComponent,
    ProductIdPipe,
    ProductNamePipe,
    ProductShortCodePipe,
    ProductPricePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
