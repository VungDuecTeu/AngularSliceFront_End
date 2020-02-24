import { Food } from './Food';
import { Bill } from './Bill';

export class Bill_Fooditem{
    billfooditemid: number;
    bill: Bill;
    amount: number;
    food: Food;

    constructor(id:number, bill:Bill, amount:number, food:Food){
        this.billfooditemid = id;
        this.amount = amount;
        this.bill = bill;
        this.food = food;
    }
}