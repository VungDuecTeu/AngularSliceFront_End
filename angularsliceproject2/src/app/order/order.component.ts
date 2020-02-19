import { Component, OnInit } from '@angular/core';
import { Fooditem } from 'src/app/entities/Fooditem';
import { FoodService } from '../services/fooditemservice/food.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor(private foodservice:FoodService,
    private data: DataService) { }

  fi:Fooditem = null;
  pizzas:Fooditem;
  wings:Fooditem;
  drinks:Fooditem;
  order:Array<Fooditem> = [];
  orderAmounts:Array<number> = [];
  orderList:Array<string> = [];
  total:number = 0.0;

  currentbillid:number = 0;

  ngOnInit() {
    this.GetAllFoodByTypeService("Pizza");
    this.GetAllFoodByTypeService("Wings");
    this.GetAllFoodByTypeService("Drinks");

    this.data.currentbillid.subscribe(bid => this.currentbillid = bid);
    this.data.changeBillId(4);
    
  }

  addToOrder(food:Fooditem){
    let amount = Number((<HTMLInputElement>document.getElementById("input_" + food.foodID)).value);
    
    if (amount >= 0){
      this.order.push(food);
      this.orderAmounts.push(amount);
      this.orderList.push(amount + " " + food.name + "         " + food.price.toFixed(2));
      this.total += (food.price * amount);
    } else {
      alert("Can not order a negative amount!");
    }
  }


  headToCheckOut(){
    console.log("headingToCheckOut")
    console.log(this.order);
    console.log(this.orderAmounts);
    console.log(this.total);
    this.foodservice.moveOrder(this.order, this.orderAmounts, this.total);
  }

  async CreateFoodService(food:Fooditem){
    let special: Fooditem = await this.foodservice.createFood(food)
    .then((onfulfilled) => {
      this.fi = onfulfilled;
      console.log(this.fi);
      return onfulfilled;
    })
  }

  async GetAllFoodService(){
    let special: Fooditem = await this.foodservice.getAllFood()
    .then((onfulfilled) => {
      this.fi = onfulfilled;
      console.log(this.fi);
      return onfulfilled;
    })
  }

  async GetFoodByIdService(id:number){
    let special: Fooditem = await this.foodservice.getFoodById(id)
    .then((onfulfilled) => {
      this.fi = onfulfilled;
      console.log(this.fi);
      return onfulfilled;
    })
  }

  async GetFoodByNameService(name:string){
    let special: Fooditem = await this.foodservice.getFoodByName(name)
    .then((onfulfilled) => {
      this.fi = onfulfilled;
      console.log(this.fi);
      return onfulfilled;
    })
  }

  async GetAllFoodByTypeService(type:string){
    let special: Fooditem = await this.foodservice.getAllFoodByType(type)
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
      }
      this.fi = onfulfilled;
      // console.log(this.fi);
      return onfulfilled;
    })
  }

  async UpdateFoodService(food:Fooditem){
    let special: Fooditem = await this.foodservice.updateFood(food)
    .then((onfulfilled) => {
      this.fi = onfulfilled;
      console.log(this.fi);
      return onfulfilled;
    })
  }
}
