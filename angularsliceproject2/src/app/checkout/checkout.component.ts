import { Component, OnInit } from '@angular/core';

// export interface PeriodicElement {
//   name: string;
//   position: number;
//   weight: number;
//   symbol: string;

// }
interface Food {
  name: string;
  image: string;
  callories: number;
  price: string;
}

// const ELEMENT_DATA: PeriodicElement[] = [
//   {position: 1, name: 'Peperoni pizza', weight: 500, symbol: '$20.50'},
//   {position: 2, name: 'Cheesesticks', weight: 300, symbol: '$10.15'},
//   {position: 3, name: 'Soda', weight: 60, symbol: '$2.00'},
//   {position: 4, name: 'Brownie', weight: 500, symbol: '$5.00'},
 
// ];

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


  foods = FOOD;
  // displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  // dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit() {
  }

  

}

