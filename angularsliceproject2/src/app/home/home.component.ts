import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { FoodService } from '../services/fooditemservice/food.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        // transform: 'translateX(100%)',
        opacity: 1,
      })),
      state('closed', style({
        // transform: 'translateX(50%)',
        opacity: 0,
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),
  ]
})
export class HomeComponent implements OnInit {

  listofpicurls = ["https://images.contentstack.io/v3/assets/blt068dbc54bf4fc7ed/bltf70df0a3f7b98d04/5db5c829e9effa6ba52972ea/Triple_Cheese_Pizza_v2.jpg"]
  currentindex: number = 0;

  isOpen = true;

  async GetAllFoodService() {

    let special: any = await this.foodservice.getAllFood()
      .then((onfulfilled) => {
        // this.foodlabels = onfulfilled;

        for (let i: number = 0; i < onfulfilled.length; i++) {
          this.listofpicurls.push(onfulfilled[i].url);
          console.log(onfulfilled[i].url);
        }

        return onfulfilled;
      })
  }

  fadesleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
  }

  async fade() { // 1 = enemy, 2 = player, 3 = tie
    if (this.currentindex >= this.listofpicurls.length - 1)
    this.currentindex = 1;
  else
    this.currentindex++;

    this.isOpen = true;
    await this.fadesleep(5000);
      
      this.isOpen = false;
    await this.fadesleep(1000);
    this.fade();
  }

  constructor(private foodservice:FoodService) { }

  homeBool: boolean = false;
  menuBool: boolean = false;
  checkBool: boolean = false;
  contactBool: boolean = false;
  picBool: boolean = true;


  ngOnInit() {
    this.fade();
    this.GetAllFoodService();
  }

  showHome() {
    this.homeBool = true;
    this.picBool = true;
    this.menuBool = false;
    this.checkBool = false;
    this.contactBool = false;
  }

  showMenu() {
    this.homeBool = false;
    this.menuBool = true;
    this.checkBool = false;
    this.contactBool = false;
    this.picBool = false;
  }
  showCheckout() {
    this.homeBool = false;
    this.menuBool = false;
    this.checkBool = true;
    this.contactBool = false;
    this.picBool = false;
  }
  showContact() {
    this.homeBool = false;
    this.menuBool = false;
    this.checkBool = false;
    this.contactBool = true;
    this.picBool = false;
  }
}
