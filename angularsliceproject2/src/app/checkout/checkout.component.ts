import { Component, OnInit, Inject } from '@angular/core';
import { FoodService } from '../services/fooditemservice/food.service';
import { Fooditem } from 'src/app/entities/Fooditem';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Bill } from '../entities/Bill';
import {Account} from '../entities/account';
import { BillService } from '../services/billservice/bill.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})

export class CheckoutComponent implements OnInit {
  hide: boolean;
  dataserv: any;
  
  
  constructor(public fs:FoodService,public dialog: MatDialog, public account:Account,private router:Router, private bill:BillService) { }

  order:Array<Fooditem> = [];
  orderAmounts:Array<number> = [];
  total:number = 0.00;
  tax:number = 0.06;
  animal: string;
  name: string;
  id:number= 0;
  orderDate:String="00/00/000";

  ngOnInit() {
    this.makeOrder();
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
    if (this.total!=0.00) {
      
      let Newbill= new Bill(this.id,this.account,this.total,this.orderDate);
      
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