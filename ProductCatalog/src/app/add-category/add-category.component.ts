import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CatagoryDataService } from '../catagory-data.service';
import { ICategory } from '../category/ICategory';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  cat:ICategory;
  categoryAddForm:FormGroup;
  constructor(private catagoryData : CatagoryDataService) { }

  ngOnInit(): void {
    
    this.categoryAddForm=new FormGroup({
      CategoryId:new FormControl(this.cat?.CategoryId,[Validators.required]),
      CategoryName: new FormControl(this.cat?.CategoryName,[Validators.required]),
      ShortCode:new FormControl(this.cat?.ShortCode,[Validators.required]),
      Description:new FormControl(this.cat?.Description,[Validators.required]),
    });
  }
  sendData(){
    console.log(this.categoryAddForm.value);
    this.catagoryData.addCategory(this.categoryAddForm.value);
    alert("Category Add Successfully");
    this.cancel();
   
    
  }
  cancel(){
    this.categoryAddForm.reset();
  }

}
