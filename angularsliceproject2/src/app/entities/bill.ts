import { account } from './Account';

export class bill{
    bId: number;
    account: account;
    total: number;
    orderDate: String;

    constructor (id:number, account:account, total:number, orderdate:String){
        this.bId = id;
        this.account = account;
        this.total = total;
        this.orderDate = orderdate;
    }
}
