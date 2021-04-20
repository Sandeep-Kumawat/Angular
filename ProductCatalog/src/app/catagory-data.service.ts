import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ICategory } from './category/ICategory';

@Injectable({
  providedIn: 'root'
})
export class CatagoryDataService {
  cat:ICategory;
  catgory$ : BehaviorSubject<ICategory>
  constructor() {
    this.catgory$ = new BehaviorSubject(this.cat);
    
   }
  
  
  catdata:ICategory[]=[
    {
      CategoryId:1,
      CategoryName:"Technology Goods",
      ShortCode:"Tech",
      Description:"Technical goods" 
    },
    {
      CategoryId:2,
      CategoryName:"Luxury Goods",
      ShortCode:"Luxu",
      Description:"Luxury goods" 
    },
    {
      CategoryId:3,
      CategoryName:"Commodities Goods",
      ShortCode:"Comm",
      Description:"Commdities goods" 
    },
    {
      CategoryId:4,
      CategoryName:"Regular Goods",
      ShortCode:"Regular",
      Description:"Regular goods" 
    },
    {
      CategoryId:5,
      CategoryName:"Smart Goods",
      ShortCode:"Smart",
      Description:"Smart goods" 
    },
  ];
  getCategories():ICategory[]
  {

    return this.catdata;
  }
  addCategory(newCat:ICategory){
       console.log(newCat);
       this.cat={
         ...newCat
         
       }
       this.catdata.push(this.cat);
       this.catgory$.next(this.cat);
       
  }
  deleteACategoryById(catId:number){
    // var catDelete =this.catdata.find((i)=>i.CategoryId==catId);
    this.catdata=this.catdata.filter(item=>item.CategoryId !== catId);
    alert("Category Deleted Successfully");
    return this.catdata;
  }
  deleteACategoryByShortCode(shortCode:string)
  {
    this.catdata=this.catdata.filter(item=>item.ShortCode !== shortCode);
    return this.catdata;
  }

}

