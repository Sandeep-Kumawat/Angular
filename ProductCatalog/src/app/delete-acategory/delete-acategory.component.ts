import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CatagoryDataService } from '../catagory-data.service';
import { ICategory } from '../category/ICategory';

@Component({
  selector: 'app-delete-acategory',
  templateUrl: './delete-acategory.component.html',
  styleUrls: ['./delete-acategory.component.css']
})
export class DeleteACategoryComponent implements OnInit {

  catId:number;
  catShortCode:string;

  constructor(private catagoryData : CatagoryDataService) { }

  ngOnInit(): void {
   
  }
 deleteById()
 {
   this.catagoryData.deleteACategoryById(this.catId);
 }

 deleteByShortCode()
 {
   this.catagoryData.deleteACategoryByShortCode(this.catShortCode);
 }

}
