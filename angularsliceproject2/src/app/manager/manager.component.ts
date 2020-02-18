import { Component, OnInit, ViewChild } from '@angular/core';
import { Bill_Fooditem } from 'src/app/entities/Bill_Fooditem';
import * as Chart from 'chart.js';
import { FoodService } from '../services/fooditemservice/food.service';
import { Fooditem } from '../entities/Fooditem';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {

  constructor(private foodservice: FoodService) { }

  foodlabels = [];
  foodquantities = [1, 2, 3, 4, 5, 6,1, 2, 3, 4, 5, 6];

  customerlabels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  customerpurchasequantities = [1, 2, 3, 4, 5, 6];


  @ViewChild('foodChart', { static: true }) private foodchartRef;
  @ViewChild('customerpurchasechart', { static: true }) private customerpurchaseRef;
  foodchart: any;
  customerpurchasechart: any;

  ngOnInit() {
    this.GetAllFoodService();
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

  async GetAllFoodService(){

    let special: any = await this.foodservice.getAllFood()
    .then((onfulfilled) => {
      // this.foodlabels = onfulfilled;
      
      for (let i:number = 0; i < onfulfilled.length; i++){
        this.foodlabels.push(onfulfilled[i].name);
        console.log(onfulfilled[i].name);
      }

      return onfulfilled;
    })
  }

  createFoodChart() {
    console.log("in here");
    this.customerpurchasechart = null;
    this.foodchart = new Chart(this.foodchartRef.nativeElement, {
      type: 'bar',
      data: {
        labels: this.foodlabels,

        datasets: [
          {

            data: this.foodquantities,
            borderColor: 'white',
            backgroundColor: ["red", "blue", "green", "orange", "yellow", "pink", "purple", "violet", "gold",
              "aqua", "lime", "coral", "teal", "brown"],
            fill: true

          }
        ]
      },
      options: {
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
