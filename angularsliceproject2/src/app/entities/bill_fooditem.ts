import { Fooditem } from './Fooditem';
import { Bill } from './Bill';

export class Bill_Fooditem{
    billfooditemid: number;
    bill: Bill;
    amount: number;
    fooditem: Fooditem;

    constructor(id:number, bill:Bill, amount:number, fooditem:Fooditem){
        this.billfooditemid = id;
        this.amount = amount;
        this.bill = bill;
        this.fooditem = fooditem;
    }
}