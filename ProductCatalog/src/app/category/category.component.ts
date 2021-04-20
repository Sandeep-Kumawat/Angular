import { Component, OnInit } from '@angular/core';
import { CatagoryDataService } from '../catagory-data.service';
import { ICategory } from './ICategory';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categories : ICategory[]=[];
  constructor(private categoryData :CatagoryDataService) { }

  ngOnInit(): void {
    this.categories=this.categoryData.getCategories();
  }
  displayedColumns: string[] = ['Category ID', 'Category Name', 'Short Code', 'Description'];

}
