import { fooditem } from './Fooditem';
import { bill } from './Bill';

export class bill_fooditem{
    billfooditemid: number;
    bill: bill;
    amount: number;
    fooditem: fooditem;

    constructor(id:number, bill:bill, amount:number, fooditem:fooditem){
        this.billfooditemid = id;
        this.amount = amount;
        this.bill = bill;
        this.fooditem = fooditem;
    }
}