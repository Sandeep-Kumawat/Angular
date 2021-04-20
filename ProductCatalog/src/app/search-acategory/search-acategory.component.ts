import { Component, OnInit } from '@angular/core';
import { CatagoryDataService } from '../catagory-data.service';
import { ICategory } from '../category/ICategory';

@Component({
  selector: 'app-search-acategory',
  templateUrl: './search-acategory.component.html',
  styleUrls: ['./search-acategory.component.css']
})
export class SearchACategoryComponent implements OnInit {
  searchId:number;
  searchName:string;
  searchShortCode:string;
  categories:ICategory[]=[];
  constructor(private categortData:CatagoryDataService) {
    
   }

  ngOnInit(): void {
    this.categories=this.categortData.getCategories();
  }
  displayedColumns: string[] = ['Category ID', 'Category Name', 'Short Code', 'Description'];

}
