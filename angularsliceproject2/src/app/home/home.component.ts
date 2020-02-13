import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() {}
  
    homeBool:boolean = false;
    menuBool:boolean = false;
    checkBool:boolean = false;
    contactBool:boolean = false;
    picBool:boolean = true;


  ngOnInit() {
  }

  showHome(){
    this.homeBool = true;
    this.picBool = true;
    this.menuBool = false;
    this.checkBool = false;
    this.contactBool = false;
  }

  showMenu(){
    this.homeBool = false;
    this.menuBool = true;
    this.checkBool = false;
    this.contactBool = false;
    this.picBool = false;
  }
  showCheckout(){
    this.homeBool = false;
    this.menuBool = false;
    this.checkBool = true;
    this.contactBool = false;
    this.picBool = false;
  }
  showContact(){
    this.homeBool = false;
    this.menuBool = false;
    this.checkBool = false;
    this.contactBool = true;
    this.picBool = false;
  }
}
