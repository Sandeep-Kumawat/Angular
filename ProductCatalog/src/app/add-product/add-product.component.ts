import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductDataService } from '../product-data.service';
import { IProduct } from '../product/IProduct';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  
  product:IProduct;
  productAddForm:FormGroup;
  constructor(private productData:ProductDataService) { }

  ngOnInit(): void {
    this.productAddForm=new FormGroup({
      ProductID:new FormControl(this.product?.ProductID,[Validators.required]),
      ProductName: new FormControl(this.product?.ProductName,[Validators.required]),
      ProductShortCode:new FormControl(this.product?.ProductShortCode,[Validators.required]),
      ProductDescription:new FormControl(this.product?.ProductDescription,[Validators.required]),
      ProductPrice:new FormControl(this.product?.ProductPrice,[Validators.required]),
      ProductCategory:new FormControl(this.product?.ProductCategory,[Validators.required]),
      Manufacturer:new FormControl(this.product?.Manufacturer,[Validators.required]),
    });
  }
  sendData(){
    console.log(this.productAddForm.value);
    this.productData.addProduct(this.productAddForm.value);
    alert("Product Add Successfully");
    this.cancel();
   
    
  }
  cancel(){
    this.productAddForm.reset();
  }

}
