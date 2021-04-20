import { Pipe, PipeTransform } from '@angular/core';
import { ICategory } from './category/ICategory';

@Pipe({
  name: 'shortCode'
})
export class ShortCodePipe implements PipeTransform {

  transform(value: ICategory[],args:string): ICategory[] {
    if(!args){
      return value;
    }
    return value.filter(
      item=>item.ShortCode.toLowerCase().indexOf(args.toLowerCase())>-1)
  }

}
