import { Account } from './Account';

export class Bill{
    bId: number;
    account: Account;
    total: number;
    orderDate: String;

    constructor (id:number, account:Account, total:number, orderdate:String){
        this.bId = id;
        this.account = account;
        this.total = total;
        this.orderDate = orderdate;
    }
}
