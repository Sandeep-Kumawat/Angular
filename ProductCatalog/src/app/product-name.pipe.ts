import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from './product/IProduct';

@Pipe({
  name: 'productName'
})
export class ProductNamePipe implements PipeTransform {

  transform(value:IProduct[],args:string): IProduct[] {
    if(!args){
      return value;
    }
    return value.filter(
      item=>item.ProductName.toLowerCase().indexOf(args.toLowerCase())>-1)
  }

}
