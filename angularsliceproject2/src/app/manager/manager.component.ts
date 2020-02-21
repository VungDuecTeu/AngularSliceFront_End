import { Component, OnInit, ViewChild } from '@angular/core';
import { Bill_Fooditem } from 'src/app/entities/Bill_Fooditem';
import * as Chart from 'chart.js';
import { FoodService } from '../services/fooditemservice/food.service';
import { Fooditem } from '../entities/Fooditem';
import { BillService } from '../services/billservice/bill.service';
import { BillFooditemService } from '../services/billfooditemservice/Bill_Fooditem.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationboxComponent } from '../helpercomponents/confirmationbox/confirmationbox.component';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {

  constructor(private foodservice: FoodService,
    private billservice: BillService,
    private billfooditemservice: BillFooditemService,
    public dialog: MatDialog) { }

  title = "no";
  content ="hey";

  //foodlabels = [];
  foods = [];
  foodsquantities = [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6];
  foodsmap = new Map();

  customerlabels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  customerpurchasequantities = [1, 2, 3, 4, 5, 6];

  @ViewChild('foodChart', { static: true })
  private foodchartRef;
  @ViewChild('customerpurchasechart', { static: true })
  private customerpurchaseRef;
  @ViewChild(ConfirmationboxComponent, {static: true}) private myChild: ConfirmationboxComponent;
  
  foodchart: any;
  customerpurchasechart: any;
  
  ngOnInit() {
    this.GetAllFoodService();
    this.getAllBillFoodAmounts();
  }

  tabGroupDispatcher($event) {
    switch ($event.index) {
      case 0: this.createFoodChart();
        break;

      case 1: this.createCustomerPurchaseChart();
        break;

      case 2: 
      this.myChild.openDialog();

        break;
      case 3: this.createFoodChart();
        break;
    }
  }

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
            }
          }
        }

        // for (let i:number = 0; i < this.foodsmap.values.length; i++){
        //   this.foodsmap[i].values += "$";
        // }

        return onfulfilled;
      })
  }

  async getAllBills() {
    let special: any = await this.billservice.getAllBills()
      .then((onfulfilled) => {



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
          text: 'Food Gross profit in $'
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
        labels: this.customerlabels,

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
export class DialogContentExampleDialog {}