import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from './product/IProduct';

@Pipe({
  name: 'productId'
})
export class ProductIdPipe implements PipeTransform {

  transform(value:IProduct[],args: number): IProduct[] {
    if(!args){
      return value;
    }
    return value.filter(
      item=>item.ProductID==args)
  }

}
