import { Injectable } from '@angular/core';
import { IProduct } from './product/IProduct';
import { IPurchaseItem } from './purchase/IPurchaseItem';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  
  getPurchase():IPurchaseItem[]
  {
    return[
      {
        P_Id:1,
        P_Title:"Sandeep",
        Date:"01-04-2021",
        VendorName:"Big Bazar",
        Item:[{
          Id : 1,
          Title :'Veg. Pizza',
          Price : 100,
          Quantity : 1,
          IsInStock : true,
          ExpiryDate : '10-09-2021'
        },
        {
          Id : 2,
          Title :'Bread',
          Price : 20,
          Quantity : 2,
          IsInStock : true,
          ExpiryDate : '10-09-2021'
        },]
      },
      {
        P_Id:2,
        P_Title:"Pradeep",
        Date:"10-03-2021",
        VendorName:"Vishal",
        Item:[{
          Id : 1,
          Title :'Soap',
          Price : 30,
          Quantity : 5,
          IsInStock : true,
          ExpiryDate : '10-04-2021'
        },
        {
          Id : 2,
          Title :'Oil',
          Price : 110,
          Quantity : 1,
          IsInStock : true,
          ExpiryDate : '10-09-2021'
        },]
      },
      {
        P_Id:3,
        P_Title:"Asif",
        Date:"18-02-2020",
        VendorName:"WHSmith",
        Item:[{
          Id : 1,
          Title :'Chips',
          Price : 30,
          Quantity : 2,
          IsInStock : true,
          ExpiryDate : '10-09-2021'
        },
        {
          Id : 2,
          Title :'Namkeen',
          Price : 20,
          Quantity : 2,
          IsInStock : true,
          ExpiryDate : '10-09-2021'
        },]
      },
      {
        P_Id:4,
        P_Title:"Harsh",
        Date:"25-11-2020",
        VendorName:"EasyDay",
        Item:[{
          Id : 1,
          Title :'Rice',
          Price : 100,
          Quantity : 5,
          IsInStock : true,
          ExpiryDate : '10-09-2021'
        },
        {
          Id : 2,
          Title :'Wheet',
          Price : 20,
          Quantity : 10,
          IsInStock : true,
          ExpiryDate : '10-09-2021'
        },]
      },
      {
        P_Id:5,
        P_Title:"Kuldeep",
        Date:"19-03-2021",
        VendorName:"Reliance",
        Item:[{
          Id : 1,
          Title :'Rice',
          Price : 100,
          Quantity : 5,
          IsInStock : true,
          ExpiryDate : '10-09-2021'
        },
        {
          Id : 2,
          Title :'Wheet',
          Price : 20,
          Quantity : 10,
          IsInStock : true,
          ExpiryDate : '10-09-2021'
        },]
      }
    ]
  }
  getProducts():IProduct[]
  {
    return[
      {
        Id:1,
        Title:"Pen",
        Price:100,
        ExpiryDate:"12-10-2020",
        IsInStock:true,
        Quantity:100
      },
      {
        Id:2,
        Title:"Pencil",
        Price:50,
        ExpiryDate:"10-09-2020",
        IsInStock:false,
        Quantity:0
      },
      {
        Id:3,
        Title:"Bat",
        Price:450,
        ExpiryDate:"12-10-2021",
        IsInStock:true,
        Quantity:20
      },
      {
        Id:4,
        Title:"Ball",
        Price:75,
        ExpiryDate:"12-10-2022",
        IsInStock:false,
        Quantity:0
      },
      {
        Id:5,
        Title:"Bike",
        Price:10000,
        ExpiryDate:"10-10-2025",
        IsInStock:true,
        Quantity:10
      },
    ]
  }
}
