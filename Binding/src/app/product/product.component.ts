import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import {IProduct} from './IProduct';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

   searchText:string;
   priceSearch:number; 
  products : IProduct[]=[];
  constructor(
    private pro:DataService
  ) { }

  ngOnInit(): void {
    this.products=this.pro.getProducts();
    //console.log(this.products);
  }
  displayedColumns: string[] = ['Id', 'Title', 'Price', 'IsInStock'];

  showHtmlbool = true;
  showMaterialbool = false;
  showHtmlTable(){
    this.showHtmlbool = true;
    this.showMaterialbool = false;
  }
  showMaterialTable(){
    this.showMaterialbool = true;
    this.showHtmlbool = false;
  }
  // getProducts():IProduct[]
  // {
  //   return[
  //     {
  //       Id:1,
  //       Title:"Pen",
  //       Price:100,
  //       ExpiryDate:"12-10-2020",
  //       IsInStock:true,
  //       Quantity:100
  //     },
  //     {
  //       Id:2,
  //       Title:"Pencil",
  //       Price:50,
  //       ExpiryDate:"10-09-2020",
  //       IsInStock:false,
  //       Quantity:0
  //     },
  //     {
  //       Id:3,
  //       Title:"Bat",
  //       Price:450,
  //       ExpiryDate:"12-10-2021",
  //       IsInStock:true,
  //       Quantity:20
  //     },
  //     {
  //       Id:4,
  //       Title:"Ball",
  //       Price:75,
  //       ExpiryDate:"12-10-2022",
  //       IsInStock:false,
  //       Quantity:0
  //     },
  //     {
  //       Id:5,
  //       Title:"Bike",
  //       Price:10000,
  //       ExpiryDate:"10-10-2025",
  //       IsInStock:true,
  //       Quantity:10
  //     },
  //   ]
  // }

}
