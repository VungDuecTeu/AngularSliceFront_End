import { Component, OnInit, ViewChild } from '@angular/core';
import { Bill_Fooditem } from 'src/app/entities/Bill_Fooditem';
import * as Chart from 'chart.js';
import { FoodService } from '../services/fooditemservice/food.service';
import { Fooditem } from '../entities/Fooditem';
import { BillService } from '../services/billservice/bill.service';
import { BillFooditemService } from '../services/billfooditemservice/Bill_Fooditem.service';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {

  constructor(private foodservice: FoodService,
    private billservice: BillService,
    private billfooditemservice: BillFooditemService) { }

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

      case 2: this.createFoodChart();
      case 3: this.createFoodChart();
    }
  }

  async getAllBillFoodAmounts() {
    let special: any = await this.billfooditemservice.getAllBillFooditems()
      .then((onfulfilled) => {

        for (let i: number = 0; i < this.foods.length; i++) {
          for (let j: number = 0; j < onfulfilled.length; j++) {
            if (this.foods[i].foodID === onfulfilled[j].food.foodID) {
              this.foodsmap.set(this.foods[i].name,
                this.foodsmap.get(this.foods[i].name) + 1)
              console.log(onfulfilled[j].fooditem);
            }
            else {
              console.log(this.foods[i].foodID + " " + onfulfilled[j].food.foodID);
            }
          }
        }
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
              fontSize: 20
            }
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
