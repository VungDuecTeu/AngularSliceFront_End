import { Component, OnInit, ViewChild } from '@angular/core';
import { Bill_Fooditem } from 'src/app/entities/Bill_Fooditem';
import * as Chart from 'chart.js';
import { FoodService } from '../services/fooditemservice/food.service';
import { Fooditem } from '../entities/Fooditem';
import { BillService } from '../services/billservice/bill.service';
import { BillFooditemService } from '../services/billfooditemservice/Bill_Fooditem.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationboxComponent } from '../helpercomponents/confirmationbox/confirmationbox.component';
import { AccountService } from '../services/accountservice/account.service';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {

  constructor(private foodservice: FoodService,
    private billservice: BillService,
    private billfooditemservice: BillFooditemService,
    public dialog: MatDialog,
    private accountservice:AccountService) { }

    //inputs for dialog box
  //foodlabels = [];
  foods = [];
  grossprofit:number = 0;
  foodsquantities = [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6];
  foodsmap = new Map();

  customers = [];
  customerpurchasequantities = [1, 2, 3, 4, 5, 6];
  customersmap = new Map();
  allpreviouscurrentcustomerbills = [];
  allbills = [];
  allbillfoodamountscurrentcustomer = [];

  @ViewChild('foodChart', { static: true })
  private foodchartRef;
  @ViewChild('customerpurchasechart', { static: true })
  private customerpurchaseRef;
  //get child reference for dialog box
  @ViewChild(ConfirmationboxComponent, {static: true}) private myChild: ConfirmationboxComponent;
  
  foodchart: any;
  customerpurchasechart: any;

  ngOnInit() {
    this.GetAllFoodService();
    this.getAllAccounts();
    this.getAllBills();

    setTimeout(() => {
      this.getAllBillFoodAmounts();
    }, 500);

    setTimeout(() => {
      this.createFoodChart();
    }, 1000);
  }

  tabGroupDispatcher($event) {
    switch ($event.index) {
      case 0: this.createFoodChart();
        break;

      case 1: this.createCustomerPurchaseChart();
        break;

      case 2: 
      this.createFoodChart();
        break;
      case 3: 
      this.myChild.openDialog();
        break;
    }
  }

  opencustomerpanel(id: string) {
    this.allpreviouscurrentcustomerbills = [];

    let element = document.getElementById("panel" + id);
    element.scrollIntoView({behavior: 'smooth'});

    for (let i:number = 0; i < this.allbills.length; i++){
      if (this.allbills[i].account.aid == this.customers[id].aid){
        this.allpreviouscurrentcustomerbills.push(this.allbills[i]);
      }
    }

  }

  // after clicking accept or decline on dialog box, call this function
  emittedValueDialogBox(){
    console.log(this.myChild.result); 
  }

  async getAllBillFoodAmounts() {
    let special: any = await this.billfooditemservice.getAllBillFooditems()
      .then((onfulfilled) => {

        for (let i: number = 0; i < this.foods.length; i++) {
          for (let j: number = 0; j < onfulfilled.length; j++) {
            if (this.foods[i].foodID === onfulfilled[j].food.foodID) {
              this.foodsmap.set(this.foods[i].name,
                this.foodsmap.get(this.foods[i].name) + (onfulfilled[j].amount * this.foods[i].price));
                this.grossprofit += (onfulfilled[j].amount * this.foods[i].price);
                console.log(onfulfilled[j].amount * this.foods[i].price);
            }
          }
        }

        return onfulfilled;
      })
  }

  async getAllBillFoodAmountsConsumer() {
    let special: any = await this.billfooditemservice.getAllBillFooditems()
      .then((onfulfilled) => {

        for (let i: number = 0; i < this.foods.length; i++) {
          for (let j: number = 0; j < onfulfilled.length; j++) {
            if (this.foods[i].foodID === onfulfilled[j].food.foodID) {

            }
          }
        }

        return onfulfilled;
      })
  }

  async getAllBills() {
    let special: any = await this.billservice.getAllBills()
      .then((onfulfilled) => {
        this.allbills = onfulfilled;
        return onfulfilled;
      })
  }

  async GetAllFoodService() {

    let special: any = await this.foodservice.getAllFood()
      .then((onfulfilled) => {
        // this.foodlabels = onfulfilled;

        for (let i: number = 0; i < onfulfilled.length; i++) {
          this.foods.push(onfulfilled[i]);
          this.foodsmap.set(onfulfilled[i].name, 0);
          console.log(onfulfilled[i].name);
        }
        
        return onfulfilled;
      })
  }

  async getAllAccounts() {

    let special: any = await this.accountservice.getAllAccounts()
      .then((onfulfilled) => {
        // this.foodlabels = onfulfilled;

        for (let i: number = 0; i < onfulfilled.length; i++) {
          this.customers.push(onfulfilled[i]);
          this.customersmap.set(onfulfilled[i].username, 0);
          console.log(onfulfilled[i].username);
        }
        
        return onfulfilled;
      })
  }

  getKeys(map){
    return Array.from(map.keys());
}

  createFoodChart() {

    this.customerpurchasechart = null;
    this.foodchart = new Chart(this.foodchartRef.nativeElement, {
      type: 'bar',
      data: {
        labels: Array.from(this.foodsmap.keys()),

        datasets: [
          {

            data: Array.from(this.foodsmap.values()),
            borderColor: 'white',
            backgroundColor: ["red", "blue", "green", "orange", "yellow", "pink", "purple", "violet", "gold",
              "aqua", "lime", "coral", "teal", "brown"],
            fill: true

          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        title: {
          display: true,
          text: 'Food Revenue ($' + (this.grossprofit) + ')'
        },
        legend: {
          display: false,
        },

        scales: {
          xAxes: [{
            display: true,
            ticks: {
              fontSize: 20
            }
          }],
          yAxes: [{
            display: true,
            ticks: {
              beginAtZero: true,
              fontSize: 20,
              callback: function(value, index, values) {
                  return '$' + value;
                }
            },
          }],
        }
      }
    });
  }

  createCustomerPurchaseChart() {
    this.foodchart = null;
    this.customerpurchasechart = new Chart(this.customerpurchaseRef.nativeElement, {
      type: 'bar',
      data: {
        labels: Array.from(this.customersmap.keys()),

        datasets: [
          {

            data: this.customerpurchasequantities,
            borderColor: 'white',
            backgroundColor: ["red", "blue", "green", "orange", "yellow", "pink", "purple", "violet", "gold",
              "aqua", "lime", "coral", "teal", "brown"],
            fill: true

          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        title: {
          display: true,
          text: 'Customer Spending in $'
        },
        legend: {
          display: false,
        },

        scales: {
          xAxes: [{
            display: true,
            ticks: {
              fontSize: 40
            }
          }],
          yAxes: [{
            display: true,
            ticks: {
              beginAtZero: true,
              fontSize: 40
            }
          }],
        }
      }
    });
  }

}