import { Component, OnInit } from '@angular/core';
import { ProductDataService } from '../product-data.service';
import { IProduct } from '../product/IProduct';

@Component({
  selector: 'app-search-aproduct',
  templateUrl: './search-aproduct.component.html',
  styleUrls: ['./search-aproduct.component.css']
})
export class SearchAProductComponent implements OnInit {
  searchId:number;
  searchName:string;
  searchShortCode:string;
  searchPrice:number;
  products:IProduct[]=[];
  constructor(private productData:ProductDataService) { }

  ngOnInit(): void {
    this.products=this.productData.getProduct();
  }
  displayedColumns: string[] = ['Product ID', 'Product Name', 'Short Code', 'Description','Category','Price','Manufacturer'];

}
