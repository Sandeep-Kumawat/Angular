import { Component, OnInit } from '@angular/core';
import { CatagoryDataService } from '../catagory-data.service';
import { ICategory } from '../category/ICategory';

@Component({
  selector: 'app-list-of-all-categories',
  templateUrl: './list-of-all-categories.component.html',
  styleUrls: ['./list-of-all-categories.component.css']
})
export class ListOfAllCategoriesComponent implements OnInit {

  categories:ICategory[]=[];
  constructor(private categoryData: CatagoryDataService) { }

  ngOnInit(): void {
    this.categories=this.categoryData.getCategories();
  }
  displayedColumns: string[] = ['Category ID', 'Category Name', 'Short Code', 'Description'];

}
