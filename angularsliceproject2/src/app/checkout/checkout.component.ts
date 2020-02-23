import { Component, OnInit, Inject } from '@angular/core';
import { FoodService } from '../services/fooditemservice/food.service';
import { Fooditem } from 'src/app/entities/Fooditem';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Bill } from '../entities/Bill';
import { Account } from '../entities/account';
import { BillService } from '../services/billservice/bill.service';
import { DataService } from '../services/data.service';
import { AccountService } from '../services/accountservice/account.service';
import { getLocaleDateTimeFormat } from '@angular/common';

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
    private bill:BillService) { }

  order:Array<Fooditem> = [];
  orderAmounts:Array<number> = [];
  total:number = 0.00;
  tax:number = 0.06;
  animal: string;
  name: string;
  id:number= 0;
  date: Date = new Date();
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

  async newbill(){
    if (this.total!=0.00 && this.accountId != 0 ) {
      this.orderDate = this.date.toString();
      this.userAccount = await this.accountservice.getAccountByid(this.accountId);
      let Newbill= new Bill(this.id,this.userAccount,this.total,this.orderDate);
      console.log(Newbill);
      await this.bill.creatBill(Newbill).then((onfulfilled)=>{
        if(onfulfilled != null){
          // this.hide = true;
          //  this.dataserv.changeAccount(onfulfilled);
          //  this.router.navigate(['/home']);
          return onfulfilled;
        }
      }) 
    }else {
      alert("Order Something Pleas !!")
    }
    
  }
  
  

  popUpFunc() {
    alert(" Thanks for Your Buissness Enjoy!!!");
  }
}