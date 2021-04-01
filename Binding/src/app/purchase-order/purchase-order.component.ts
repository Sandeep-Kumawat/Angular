import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { IPurchaseItem } from '../purchase/IPurchaseItem';

@Component({
  selector: 'app-purchase-order',
  templateUrl: './purchase-order.component.html',
  styleUrls: ['./purchase-order.component.css']
})
export class PurchaseOrderComponent implements OnInit, OnChanges{
  @Input() PurchaseItem : IPurchaseItem;
   price=0;
  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges():void{
     console.log(this.PurchaseItem);
     this.PurchaseItem.Item.forEach(i => {
       this.price = this.price+i.Price;
     });
  }
}
