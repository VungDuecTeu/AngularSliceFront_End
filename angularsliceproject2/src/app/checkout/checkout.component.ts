import { Component, OnInit, Inject } from '@angular/core';
import { FoodService } from '../services/fooditemservice/food.service';
import { Food } from 'src/app/entities/Food';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Bill } from '../entities/Bill';
import { Account } from '../entities/account';
import { BillService } from '../services/billservice/bill.service';
import { DataService } from '../services/data.service';
import { AccountService } from '../services/accountservice/account.service';
import { getLocaleDateTimeFormat, DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { BillFooditemService } from '../services/billfooditemservice/Bill_Fooditem.service';
import { Bill_Fooditem } from '../entities/Bill_Fooditem';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})

export class CheckoutComponent implements OnInit {
  hide: boolean;
  dataserv: any;

  
  
  constructor(public fs:FoodService,
    public dialog: MatDialog, 
    private data: DataService, 
    private accountservice: AccountService,
    private bill:BillService,
    private router:Router,
    private billfoodservice:BillFooditemService
    ) { }

  order:Array<Food> = [];
  orderAmounts:Array<number> = [];
  total:number = 0.00;
  tax:number = 0.06;
  deliveryfee:number = 3;
  isdeliver:number = 0;
  name: string;
  id:number= 0;
  date:string;
  orderDate:String;
  accountId:number = 0;
  userAccount: Account = new Account(0,"","","","","",0);

  ngOnInit() {
    console.log("opened checkout page")
    this.makeOrder();
    this.data.currentuserid.subscribe(user => this.accountId = user.aid);
  }
 
  makeOrder(){
    this.order = this.fs.order;
    this.orderAmounts = this.fs.orderAmounts;
    this.tax *= this.fs.total;

    this.total = this.fs.total * 1.06;
    
    console.log("makeOrder");
    console.log(this.order);
    console.log(this.orderAmounts);
    console.log(this.total);
  }

  changeTotal(i:number){
    if (i == 2)
      this.deliveryfee = 3;
    else
      this.deliveryfee = 0;

    this.total = this.fs.total * 1.06 + this.deliveryfee;

  }

  setDateTime(dateTime) {
    let pipe = new DatePipe('en-US');

    const time = pipe.transform(dateTime, 'H:mm:ss');

    const date = pipe.transform(dateTime, 'yyyy-MM-dd');

    return date + ' ' + time;
  }

  async newBillFood(bill:Bill, quantity:any, food:Food){
    let billfood = new Bill_Fooditem(0, bill, quantity, food);  
    console.log(billfood);

    await this.billfoodservice.createBillFooditem(billfood).then((onfulfilled)=>{
      console.log(onfulfilled);
    });
  }

  async newbill(){
    if (this.total!=0.00 && this.accountId != 0 ) {

      this.orderDate = this.setDateTime(Date.now());

      this.userAccount = await this.accountservice.getAccountByid(this.accountId);
      let Newbill= new Bill(this.id,this.userAccount,this.total, this.orderDate);
      console.log(Newbill);
      await this.bill.creatBill(Newbill).then((onfulfilled)=>{
        if(onfulfilled != null){

          for (let i:number = 0; i < this.order.length; i++){
            // console.log(this.orderAmounts[i]);
            this.newBillFood(onfulfilled, this.orderAmounts[i], this.order[i]);
          }


         // this.dataserv.changeAccount(onfulfilled);
            
            // window.location.reload();
          //console.log(onfulfilled);
          alert(" Thanks for Your Business Enjoy!!!");
          return onfulfilled;
        }
      }) 
    }else {
      alert("Order Something Pleas !!")
    }
    
  }
}