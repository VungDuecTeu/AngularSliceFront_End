import { Component, OnInit } from '@angular/core';
import { CreateFoodService } from '../services/fooditemservices/create-food.service';
import { GetAllFoodService } from '../services/fooditemservices/get-all-food.service';
import { GetFoodByIdService } from '../services/fooditemservices/get-food-by-id.service';
import { GetFoodByNameService } from '../services/fooditemservices/get-food-by-name.service';
import { GetAllFoodByTypeService } from '../services/fooditemservices/get-all-food-by-type.service';
import { UpdateFoodService } from '../services/fooditemservices/update-food.service';
import { fooditem } from 'src/app/entities/fooditem';

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

  fi:fooditem = null;

  ngOnInit() {
    this.GetAllFoodService();
    this.GetAllFoodByTypeService("Wings");
    this.GetFoodByIdService(3);
    this.GetFoodByNameService("Pepperoni Pizza");
  }

  async CreateFoodService(food:fooditem){
    let special: fooditem = await this.createfoodservice.createFood(food)
    .then((onfulfilled) => {
      this.fi = onfulfilled;
      console.log(this.fi);
      return onfulfilled;
    })
  }

  async GetAllFoodService(){
    let special: fooditem = await this.getallfoodservice.getAllFood()
    .then((onfulfilled) => {
      this.fi = onfulfilled;
      console.log(this.fi);
      return onfulfilled;
    })
  }

  async GetFoodByIdService(id:number){
    let special: fooditem = await this.getfoodbyidservice.getFoodById(id)
    .then((onfulfilled) => {
      this.fi = onfulfilled;
      console.log(this.fi);
      return onfulfilled;
    })
  }

  async GetFoodByNameService(name:string){
    let special: fooditem = await this.getfoodbynameservice.getFoodByName(name)
    .then((onfulfilled) => {
      this.fi = onfulfilled;
      console.log(this.fi);
      return onfulfilled;
    })
  }

  async GetAllFoodByTypeService(type:string){
    let special: fooditem = await this.getallfoodbytypeservice.getAllFoodByType(type)
    .then((onfulfilled) => {
      this.fi = onfulfilled;
      console.log(this.fi);
      return onfulfilled;
    })
  }

  async UpdateFoodService(food:fooditem){
    let special: fooditem = await this.updatefoodservice.updateFood(food)
    .then((onfulfilled) => {
      this.fi = onfulfilled;
      console.log(this.fi);
      return onfulfilled;
    })
  }
}
