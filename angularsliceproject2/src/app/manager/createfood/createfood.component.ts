import { Component, OnInit } from '@angular/core';
import { Fooditem } from 'src/app/entities/Fooditem';
import { FoodService } from 'src/app/services/fooditemservice/food.service';

@Component({
  selector: 'app-createfood',
  templateUrl: './createfood.component.html',
  styleUrls: ['./createfood.component.css']
})

export class CreatefoodComponent implements OnInit {

  foodname:string;
  foodtype:string;
  foodurl:string;
  fooddescription:string;
  foodcalories:number;
  foodprice:number;

  constructor(private foodservice:FoodService) { }

  async createFoodItem(){
    let newfood = new Fooditem(0,this.foodtype, this.foodname,
      this.fooddescription, this.foodprice, this.foodcalories,
      this.foodurl);

    let special:any = await this.foodservice.createFood(newfood).then(
      (onfulfilled) => {
        alert("Successfully made a fooditem: " + newfood);
      }
    )


  }


  ngOnInit() {
  }

}
