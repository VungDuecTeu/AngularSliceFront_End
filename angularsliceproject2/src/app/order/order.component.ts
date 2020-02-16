import { Component, OnInit } from '@angular/core';
import { GetAllFoodService } from '../services/fooditemservices/get-all-food.service';
import { fooditem } from 'src/app/entities/fooditem';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor(private getallfoodservice:GetAllFoodService) { }

  fi:fooditem = null;

  ngOnInit() {
    this.GetAllFoodService();
  }

  async GetAllFoodService(){
    let special: fooditem = await this.getallfoodservice.getAllFood()
    .then((onfulfilled) => {
      this.fi = onfulfilled;
      console.log(this.fi);
      return onfulfilled;
    })
  }
}
