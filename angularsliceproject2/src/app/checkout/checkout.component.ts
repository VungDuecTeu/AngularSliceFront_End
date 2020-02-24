import { Component, OnInit, Inject } from '@angular/core';
import { FoodService } from '../services/fooditemservice/food.service';
import { Fooditem } from 'src/app/entities/Fooditem';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Bill } from '../entities/Bill';
import { Account } from '../entities/account';
import { BillService } from '../services/billservice/bill.service';
import { DataService } from '../services/data.service';
import { AccountService } from '../services/accountservice/account.service';
import { getLocaleDateTimeFormat, DatePipe } from '@angular/common';
import { Router } from '@angular/router';

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
    private router:Router
    ) { }

  order:Array<Fooditem> = [];
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

  changeTotal(){
    if (this.isdeliver == 1)
    this.total = this.fs.total * 1.06 + this.deliveryfee;
    else
    this.total = this.fs.total * 1.06;
  }

  setDateTime(dateTime) {
    let pipe = new DatePipe('en-US');

    const time = pipe.transform(dateTime, 'H:mm:ss');

    const date = pipe.transform(dateTime, 'yyyy-MM-dd');

    return date + ' ' + time;
  }

  async newbill(){
    if (this.total!=0.00 && this.accountId != 0 ) {

      this.orderDate = this.setDateTime(Date.now());

      this.userAccount = await this.accountservice.getAccountByid(this.accountId);
      let Newbill= new Bill(this.id,this.userAccount,this.total, this.orderDate);
      console.log(Newbill);
      await this.bill.creatBill(Newbill).then((onfulfilled)=>{
        if(onfulfilled != null){
          alert(" Thanks for Your Buissness Enjoy!!!");
         // this.dataserv.changeAccount(onfulfilled);
            
            window.location.reload();
          //console.log(onfulfilled);

          return onfulfilled;
        }
      }) 
    }else {
      alert("Order Something Pleas !!")
    }
    
  }
}