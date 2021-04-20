import { Component, OnInit } from '@angular/core';
import { ProductDataService } from '../product-data.service';
import { IProduct } from '../product/IProduct';

@Component({
  selector: 'app-list-of-all-products',
  templateUrl: './list-of-all-products.component.html',
  styleUrls: ['./list-of-all-products.component.css']
})
export class ListOfAllProductsComponent implements OnInit {

  products:IProduct[]=[];
  constructor(private productData:ProductDataService) { }

  ngOnInit(): void {
    this.products=this.productData.getProduct();
  }
  displayedColumns: string[] = ['Product ID', 'Product Name', 'Short Code', 'Description','Category','Price','Manufacturer'];
}
