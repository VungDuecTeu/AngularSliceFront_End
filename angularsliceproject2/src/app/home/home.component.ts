import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

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

  listofurls = ["https://images.contentstack.io/v3/assets/blt068dbc54bf4fc7ed/bltf70df0a3f7b98d04/5db5c829e9effa6ba52972ea/Triple_Cheese_Pizza_v2.jpg",
    "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fcdn-image.myrecipes.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2Fimage%2Frecipes%2Fck%2Fgluten-free-cookbook%2Fpepperoni-pizza-ck-x.jpg%3Fitok%3DNWreajsZ&w=450&c=sc&poi=face&q=85",
    "https://www.wilton.com/dw/image/v2/AAWA_PRD/on/demandware.static/-/Sites-wilton-project-master/default/dw141e010b/images/project/WLRECIP-8636/supreme-pizza-recipe.jpg?sw=800&sh=800"]
  currentindex: number = 0;

  isOpen = true;

  fadesleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
  }

  async fade() { // 1 = enemy, 2 = player, 3 = tie
    if (this.currentindex >= this.listofurls.length - 1)
    this.currentindex = 0;
  else
    this.currentindex++;

    this.isOpen = true;
    await this.fadesleep(5000);
      
      this.isOpen = false;
    await this.fadesleep(1000);
    this.fade();
  }

  constructor() { }

  homeBool: boolean = false;
  menuBool: boolean = false;
  checkBool: boolean = false;
  contactBool: boolean = false;
  picBool: boolean = true;


  ngOnInit() {
    this.fade();
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
