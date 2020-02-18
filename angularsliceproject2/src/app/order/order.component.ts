import { Component, OnInit } from '@angular/core';
import { CreateFoodService } from '../services/Fooditemservices/create-food.service';
import { GetAllFoodService } from '../services/Fooditemservices/get-all-food.service';
import { GetFoodByIdService } from '../services/Fooditemservices/get-food-by-id.service';
import { GetFoodByNameService } from '../services/Fooditemservices/get-food-by-name.service';
import { GetAllFoodByTypeService } from '../services/Fooditemservices/get-all-food-by-type.service';
import { UpdateFoodService } from '../services/Fooditemservices/update-food.service';
import { Fooditem } from 'src/app/entities/Fooditem';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor(
    private createfoodservice:CreateFoodService,
    private getallfoodservice:GetAllFoodService,
    private getfoodbyidservice:GetFoodByIdService,
    private getfoodbynameservice:GetFoodByNameService,
    private getallfoodbytypeservice:GetAllFoodByTypeService,
    private updatefoodservice:UpdateFoodService) { }

  fi:Fooditem = null;
  pizzas:Fooditem;
  wings:Fooditem;
  drinks:Fooditem;
  order:Array<Fooditem> = [];
  orderList:Array<string> = [];
  total:number = 0.0;

  ngOnInit() {
    this.GetAllFoodByTypeService("Pizza");
    this.GetAllFoodByTypeService("Wings");
    this.GetAllFoodByTypeService("Drinks");
  }

  addToOrder(food:Fooditem){
    this.order.push(food);
    let amount = Number((<HTMLInputElement>document.getElementById("input_" + food.foodID)).value);
    this.orderList.push(amount + " " + food.name);
    this.total += (food.price * amount);
  }

  async CreateFoodService(food:Fooditem){
    let special: Fooditem = await this.createfoodservice.createFood(food)
    .then((onfulfilled) => {
      this.fi = onfulfilled;
      console.log(this.fi);
      return onfulfilled;
    })
  }

  async GetAllFoodService(){
    let special: Fooditem = await this.getallfoodservice.getAllFood()
    .then((onfulfilled) => {
      this.fi = onfulfilled;
      console.log(this.fi);
      return onfulfilled;
    })
  }

  async GetFoodByIdService(id:number){
    let special: Fooditem = await this.getfoodbyidservice.getFoodById(id)
    .then((onfulfilled) => {
      this.fi = onfulfilled;
      console.log(this.fi);
      return onfulfilled;
    })
  }

  async GetFoodByNameService(name:string){
    let special: Fooditem = await this.getfoodbynameservice.getFoodByName(name)
    .then((onfulfilled) => {
      this.fi = onfulfilled;
      console.log(this.fi);
      return onfulfilled;
    })
  }

  async GetAllFoodByTypeService(type:string){
    let special: Fooditem = await this.getallfoodbytypeservice.getAllFoodByType(type)
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
      console.log(this.fi);
      return onfulfilled;
    })
  }

  async UpdateFoodService(food:Fooditem){
    let special: Fooditem = await this.updatefoodservice.updateFood(food)
    .then((onfulfilled) => {
      this.fi = onfulfilled;
      console.log(this.fi);
      return onfulfilled;
    })
  }
}
