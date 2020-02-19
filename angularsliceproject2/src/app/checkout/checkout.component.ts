import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

interface Food {
  name: string;
  image: string;
  callories: number;
  price: string;
}


const FOOD: Food[] = [
  {
    name: 'Pepperoni Pizza',
    image: '/menu_item_280x175/public/images/menu-items/thumbnails/build-you-own_0.png?itok=kqLw4gRp',
    callories: 280,
    price: '$120.50'
  },
  {
    name: 'Sausage & Pepperoni Pizza',
    image: '/menu_item_280x175/public/images/menu-items/thumbnails/meat-eaters.png?itok=X5GvwbNj',
    callories: 300,
    price: '$15.25'
  },
  {
    name: 'Soda',
    image: '/menu_item_280x175/public/images/menu-items/thumbnails/46._2_liter_beverage.png?itok=k_Oh2-Tc',
    callories: 50,
    price: '$5.00'
  },
  {
    name: 'Wings',
    image: '/menu_item_280x175/public/images/menu-items/thumbnails/34._bbq_howie_wings.png?itok=zj3a0XQI',
    callories: 100,
    price: '$20.25'
  }
];

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})

export class CheckoutComponent implements OnInit {

  currentbillid:number = 0;

  foods = FOOD;
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.currentbillid.subscribe(bid => this.currentbillid = bid);
    console.log(this.currentbillid);
  }

  

}

