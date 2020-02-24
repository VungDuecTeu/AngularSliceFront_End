import { Component, OnInit } from '@angular/core';
import { Food } from 'src/app/entities/Food';
import { FoodService } from 'src/app/services/fooditemservice/food.service';

@Component({
  selector: 'app-createfood',
  templateUrl: './createfood.component.html',
  styleUrls: ['./createfood.component.css']
})

export class CreatefoodComponent implements OnInit {

  public foodname:string = null;
  public foodtype:string = null;
  public foodurl:string;
  public fooddescription:string;
  public foodcalories:number;
  public foodprice:number;

  constructor(private foodservice:FoodService) { }

  async createFoodItem(){

    let newfood = new Food(0,this.foodtype, this.foodname,
      this.fooddescription, this.foodprice, this.foodcalories,
      this.foodurl);
    
    let special:any = await this.foodservice.createFood(newfood).then(
      (onfulfilled) => {
        alert("Successfully made a fooditem: " + newfood.name);
      }
    )

  }


  ngOnInit() {
  }

}
