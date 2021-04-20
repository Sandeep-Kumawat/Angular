import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IProduct } from './product/IProduct';

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {

  pro:IProduct;
  product$ : BehaviorSubject<IProduct>
  constructor() { 
    this.product$ = new BehaviorSubject(this.pro);
  }
  proData:IProduct[]=[
    {
      ProductID:1,
      ProductName:"Laptop",
      ProductCategory:"Technical",
      ProductShortCode:"Tech",
      ProductPrice:30000,
      Manufacturer:"Dell",
      ProductDescription:"8GB RAM"
    },
    {
      ProductID:2,
      ProductName:"Mobile",
      ProductCategory:"Technical",
      ProductShortCode:"Tech",
      ProductPrice:3000,
      Manufacturer:"Redmi",
      ProductDescription:"6GB RAM"
    },
    {
      ProductID:3,
      ProductName:"Car",
      ProductCategory:"Luxury Goods",
      ProductShortCode:"Luxu",
      ProductPrice:5000000,
      Manufacturer:"Audi",
      ProductDescription:"300 Speed"
    },
    {
      ProductID:4,
      ProductName:"Bed",
      ProductCategory:"Commodities Goods",
      ProductShortCode:"Comm",
      ProductPrice:5000,
      Manufacturer:"Deva",
      ProductDescription:"Strong"
    },
];
 getProduct():IProduct[]
 {
   return this.proData;
 }

addProduct(newPro:IProduct){
  console.log(newPro);
  this.pro={
    ...newPro
    
  }
  this.proData.push(this.pro);
  this.product$.next(this.pro);
  
}
deleteAProductById(proId:number){
  
  this.proData=this.proData.filter(item=>item.ProductID !== proId);
  alert("Category Deleted Successfully");
  return this.proData;
}
deleteAProductByShortCode(shortCode:string)
{
  this.proData=this.proData.filter(item=>item.ProductShortCode !== shortCode);
  return this.proData;
}
}
