import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IProduct } from './product/IProduct';
import { IPurchaseItem } from './purchase/IPurchaseItem';

@Injectable({
  providedIn: 'root'
})
export class SharedataService {
  product:IProduct={
    Id:1,
    Title:"Pen",
    Price:20,
    ExpiryDate:"10-02-2021",
    IsInStock:true,
    Quantity:5
  };
  prod:IProduct;
  product$ : BehaviorSubject<IProduct>
  constructor() {
     this.product$= new BehaviorSubject(this.product);
   }
  //  setPrice(price:number)
  //  {
  //    this.product.Price=price;
  //    this.product$.next(this.product);
  //  }
  updateProduct(p:IProduct){
    this.prod={
      ...p
    }
    this.product$.next(this.prod);
  }
}
