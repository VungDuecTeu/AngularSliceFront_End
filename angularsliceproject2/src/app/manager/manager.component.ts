import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Bill_Fooditem } from 'src/app/entities/Bill_Fooditem';
import * as Chart from 'chart.js';
import { FoodService } from '../services/fooditemservice/food.service';
import { Food } from '../entities/Food';
import { BillService } from '../services/billservice/bill.service';
import { BillFooditemService } from '../services/billfooditemservice/Bill_Fooditem.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationboxComponent } from '../helpercomponents/confirmationbox/confirmationbox.component';
import { AccountService } from '../services/accountservice/account.service';
import { Bill } from '../entities/Bill';
import { DataService } from '../services/data.service';

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
    private accountservice:AccountService,
    private data: DataService) { }

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
  allbillfoodamountsquantitycurrentcustomer = [];
  @ViewChild('foodChart', { static: true })
  private foodchartRef;
  @ViewChild('customerpurchasechart', { static: true })
  private customerpurchaseRef;
  //get child reference for dialog box
  @ViewChild(ConfirmationboxComponent, {static: true}) private myChild: ConfirmationboxComponent;
  
  foodchart: any;
  customerpurchasechart: any;
  stepfood:number = -1;
  groupdispacher:number = -1;

  ngOnInit() {
    this.GetAllFoodService();
    this.getAllAccounts();


    setTimeout(() => {
      this.getAllBills();
    }, 250);


    setTimeout(() => {
      this.getAllBillFoodAmounts();
    }, 500);

    setTimeout(() => {
      this.createFoodChart();
    }, 1000);
  }

  automaticUpdateGraphs(){  
  
    if (this.groupdispacher == 1){
      setTimeout(() => {
        this.GetAllFoodService()
      }, 1000);
  
      setTimeout(() => {
        this.getAllBillFoodAmounts()
      }, 1000);

      setTimeout(() => {
        this.createFoodChart()
        this.automaticUpdateGraphs();
      }, 8000);
    }
    else if (this.groupdispacher == 2)
    {
      setTimeout(() => {
        this.getAllAccounts();
      }, 1000);
  
      setTimeout(() => {
        this.getAllBills();
      }, 1000);

      setTimeout(() => {
        this.getAllBillFoodAmounts();
      }, 1000);

      setTimeout(() => {
        this.createCustomerPurchaseChart();
        this.automaticUpdateGraphs();
      }, 8000);
    }

  }

  tabGroupDispatcher($event) {
    switch ($event.index) {
      case 0: 
      this.groupdispacher = 1;

      this.automaticUpdateGraphs();
      this.createFoodChart();
        break;

      case 1: 
      this.groupdispacher = 2;

      this.automaticUpdateGraphs();
      this.createCustomerPurchaseChart();
        break;

      case 2: 
      this.groupdispacher = 3;
      // this.createFoodChart();
        break;
      case 3: 
      this.groupdispacher = 4;
      // this.myChild.openDialog();
        break;
    }
  }

  openCustomerPanel(id: string) {
    this.allpreviouscurrentcustomerbills = [];
    this.stepfood = -1;
    
    let element = document.getElementById("panel" + id);
    element.scrollIntoView({behavior: 'smooth', block: "nearest", inline: "nearest"});

    for (let i:number = 0; i < this.allbills.length; i++){
      if (this.allbills[i].account.aid == this.customers[id].aid){
        this.allpreviouscurrentcustomerbills.push(this.allbills[i]);
      }
    }

  }

  openCustomerFoodsPanel(bill: Bill, x:number) {
    if (this.stepfood != x){
      this.stepfood = x;
      this.getAllBillFoodAmountsConsumer(bill);
      console.log(bill);
      }
  }

  // after clicking accept or decline on dialog box, call this function
  emittedValueDialogBox(){
    console.log(this.myChild.result); 
  }

  async getAllBillFoodAmounts() {

    let special: any = await this.billfooditemservice.getAllBillFooditems()
      .then((onfulfilled) => {
        this.grossprofit = 0;

        for (let i: number = 0; i < this.foods.length; i++) {
          for (let j: number = 0; j < onfulfilled.length; j++) {
            if (this.foods[i].foodID === onfulfilled[j].food.foodID) {
              this.foodsmap.set(this.foods[i].name,
                this.foodsmap.get(this.foods[i].name) + (onfulfilled[j].amount * this.foods[i].price));
                this.grossprofit += (onfulfilled[j].amount * this.foods[i].price);
            }
          }
        }

        return onfulfilled;
      })
  }

  async getAllBillFoodAmountsConsumer(bill:Bill) {
    let special: any = await this.billfooditemservice.getAllBillFooditems()
      .then((onfulfilled) => {
        this.allbillfoodamountscurrentcustomer = [];
        this.allbillfoodamountsquantitycurrentcustomer = [];

        for (let i: number = 0; i < this.foods.length; i++) {
          for (let j: number = 0; j < onfulfilled.length; j++) {
            if (this.foods[i].foodID === onfulfilled[j].food.foodID) {              
              if (onfulfilled[j].bill.bId == bill.bId)
              {
                this.allbillfoodamountsquantitycurrentcustomer.push(onfulfilled[j].amount);
                this.allbillfoodamountscurrentcustomer.push(this.foods[i]);
              }
             
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
        for (let x:number = 0; x < onfulfilled.length; x++){
          if (this.customersmap.has(onfulfilled[x].account.username)){
            console.log(onfulfilled[x].account.username);
            this.customersmap.set(onfulfilled[x].account.username,
              this.customersmap.get(onfulfilled[x].account.username) +
            onfulfilled[x].total);
          }
        }
        return onfulfilled;
      })
  }

  async GetAllFoodService() {
    let special: any = await this.foodservice.getAllFood()
      .then((onfulfilled) => {
        // this.foodlabels = onfulfilled;
        this.foods = [];

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
        this.customers = [];

        for (let i: number = 0; i < onfulfilled.length; i++) {
          this.customers.push(onfulfilled[i]);
          this.customersmap.set(onfulfilled[i].username, 0);
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
            backgroundColor: 'rgba(255, 0, 0, 0.5)',
            
            fill: true

          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        title: {
          display: true,
          text: 'Food Revenue ($' + (this.grossprofit.toFixed(2)) + ')'
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
                  return '$' + value.toFixed(2);
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

            data: Array.from(this.customersmap.values()),
            borderColor: 'white',
            backgroundColor: 'rgba(255, 0, 0, 0.5)',
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
              fontSize: 40,
              callback: function(value, index, values) {
                return '$' + value.toFixed(2);
              }
            }
          }],
        }
      }
    });
  }

}