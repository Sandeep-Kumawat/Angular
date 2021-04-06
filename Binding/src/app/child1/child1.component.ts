import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { IProduct } from '../product/IProduct';
import { SharedataService } from '../sharedata.service';

function priceValidator( min: number, max: number ): ValidatorFn{        //when we are taking input from user or Api
  return (control:AbstractControl):{[key:string]:boolean}|null=>
  {
     if((isNaN(control.value) || control.value<min ||control.value>max))
     {
       return {'priceRange':true};
     }
     return null;
  };
 }

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {
   productEditForm:FormGroup;
   prod:IProduct;
   min:number=0;
  max:number=1000;
  constructor(private sharedata: SharedataService) { }

  ngOnInit(): void {
    this.sharedata.product$.subscribe(data=>{
      this.prod=data
    })
    this.productEditForm=new FormGroup({
      Id:new FormControl(this.prod?.Id,[Validators.required]),
      Title: new FormControl(this.prod?.Title,[Validators.required]),
      Price:new FormControl(this.prod?.Price,[priceValidator(this.min,this.max),Validators.required]),
      Quantity:new FormControl(this.prod?.Quantity,[Validators.required]),
      ExpiryDate:new FormControl(this.prod?.ExpiryDate,[Validators.required]),
      IsInStock:new FormControl(this.prod?.IsInStock,[Validators.required]),

    });
    
  }
  updateProduct(){
    console.log(this.productEditForm.value);
    this.sharedata.updateProduct(this.productEditForm.value);
  }
  cancel(){
    this.productEditForm.reset();
  }
  // setPrice(){
  //   this.sharedata.setPrice(this.data);
  // }
  
}
