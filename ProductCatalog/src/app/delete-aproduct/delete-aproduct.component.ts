import { Component, OnInit } from '@angular/core';
import { ProductDataService } from '../product-data.service';

@Component({
  selector: 'app-delete-aproduct',
  templateUrl: './delete-aproduct.component.html',
  styleUrls: ['./delete-aproduct.component.css']
})
export class DeleteAProductComponent implements OnInit {
  
  proId:number;
  proShortCode:string;
  constructor(private productData : ProductDataService) { }

  ngOnInit(): void {
  }
  deleteById()
  {
    this.productData.deleteAProductById(this.proId);
  }
 
  deleteByShortCode()
  {
    this.productData.deleteAProductByShortCode(this.proShortCode);
  }

}
