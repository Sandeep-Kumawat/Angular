import { Component, OnInit } from '@angular/core';
import { ProductDataService } from '../product-data.service';
import { IProduct } from './IProduct';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

   products:IProduct[]=[];
  constructor(private productData:ProductDataService) { }

  ngOnInit(): void {
    this.products=this.productData.getProduct();
  }
  displayedColumns: string[] = ['Product ID', 'Product Name', 'Short Code', 'Description','Category','Price','Manufacturer'];

}
