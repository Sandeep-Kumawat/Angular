import {IProduct} from '../product/IProduct';
export interface IPurchaseItem{
    P_Id:number,
    P_Title:string,
    Date:string,
    VendorName:string,
    Item:IProduct[]
}