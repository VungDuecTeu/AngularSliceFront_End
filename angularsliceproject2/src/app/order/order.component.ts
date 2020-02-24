import { Component, OnInit } from '@angular/core';
import { Food } from 'src/app/entities/Food';
import { FoodService } from '../services/fooditemservice/food.service';
import { DataService } from '../services/data.service';
import { Account } from '../entities/Account';
import { MatExpansionPanel } from '@angular/material';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor(private foodservice:FoodService,
    private data: DataService) { }

  fi:Food = null;
  deals:Food;
  pizzas:Food;
  wings:Food;
  sides:Food;
  drinks:Food;
  desserts:Food;
  order:Array<Food> = [];
  orderAmounts:Array<number> = [];
  orderList:Array<string> = [];
  orderListPrice:Array<string> = [];
  total:number = 0.0;

  currentbillid:number = 0;
  accountId:number = 0;

  ngOnInit() {
    this.GetAllFoodByTypeService("Deals");
    this.GetAllFoodByTypeService("Pizza");
    this.GetAllFoodByTypeService("Wings");
    this.GetAllFoodByTypeService("Drinks");
    this.GetAllFoodByTypeService("Desserts");
    this.GetAllFoodByTypeService("Sides");

    this.data.currentbillid.subscribe(bid => this.currentbillid = bid);
    this.data.changeBillId(4);
    
    this.data.currentuserid.subscribe(user => this.accountId = user.aid);
    console.log("Current user id: " + this.accountId)
  }
  panels = [];

  open(id: string) {
    let element = document.getElementById(id);
    element.scrollIntoView({behavior: 'smooth'});
  }
  
  addToOrder(food:Food){
    let amount = Number((<HTMLInputElement>document.getElementById("input_" + food.foodID)).value);

    if (this.accountId > 0){
      this.order.push(food);
      this.orderAmounts.push(amount);
      this.orderList.push(amount + " " + food.name);
      this.orderListPrice.push("$" + food.price.toFixed(2));
      this.total += (food.price * amount);
    } else {
      alert("Must be Logged In to order!");
    }
  }


  headToCheckOut(){
    console.log("headingToCheckOut")
    console.log(this.order);
    console.log(this.orderAmounts);
    console.log(this.total);
    this.foodservice.moveOrder(this.order, this.orderAmounts, this.total);
  }

  async CreateFoodService(food:Food){
    let special: Food = await this.foodservice.createFood(food)
    .then((onfulfilled) => {
      this.fi = onfulfilled;
      console.log(this.fi);
      return onfulfilled;
    })
  }

  async GetAllFoodService(){
    let special: Food = await this.foodservice.getAllFood()
    .then((onfulfilled) => {
      this.fi = onfulfilled;
      console.log(this.fi);
      return onfulfilled;
    })
  }

  async GetFoodByIdService(id:number){
    let special: Food = await this.foodservice.getFoodById(id)
    .then((onfulfilled) => {
      this.fi = onfulfilled;
      console.log(this.fi);
      return onfulfilled;
    })
  }

  async GetFoodByNameService(name:string){
    let special: Food = await this.foodservice.getFoodByName(name)
    .then((onfulfilled) => {
      this.fi = onfulfilled;
      console.log(this.fi);
      return onfulfilled;
    })
  }

  async GetAllFoodByTypeService(type:string){
    let special: Food = await this.foodservice.getAllFoodByType(type)
    .then((onfulfilled) => {
      if(type == "Pizza"){
        this.pizzas = onfulfilled;
        console.log(this.pizzas);
      } else if(type == "Wings"){
        this.wings = onfulfilled;
        console.log(this.wings);
      } else if(type == "Drinks"){
        this.drinks = onfulfilled;
        console.log(this.drinks);
      } else if(type == "Deals"){
        this.deals = onfulfilled;
        console.log(this.deals);
      } else if(type == "Sides"){
        this.sides = onfulfilled;
        console.log(this.sides);
      } else if(type == "Desserts"){
        this.desserts = onfulfilled;
        console.log(this.desserts);
      } 
      
      this.fi = onfulfilled;
      // console.log(this.fi);
      return onfulfilled;
    })
  }

  async UpdateFoodService(food:Food){
    let special: Food = await this.foodservice.updateFood(food)
    .then((onfulfilled) => {
      this.fi = onfulfilled;
      console.log(this.fi);
      return onfulfilled;
    })
  }
}
