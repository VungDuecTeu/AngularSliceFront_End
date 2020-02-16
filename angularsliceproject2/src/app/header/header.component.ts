import { Component, OnInit, ViewChild } from '@angular/core';
import {MatMenuTrigger, MatTabChangeEvent} from '@angular/material';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  //@ViewChild(MatMenuTrigger) matMenuTrigger: MatMenuTrigger;

  constructor(private router: Router) { }
  public selectedIndex: number = 0;

  ngOnInit() {
  }

  showPages(tabChangeEvent: MatTabChangeEvent){
    console.log(tabChangeEvent);
    switch(tabChangeEvent.index){
      case 0: this.router.navigate(["/home"]);
      break;
      case 1: this.router.navigate(["/order"]);
      break;
      case 2: this.router.navigate(["/contact"]);
      break;
      case 3: this.router.navigate(["/checkout"]);
      break;
      default: this.router.navigate(["/home"]);
        break;
    }
  }

  // openMyMenu() {
  //   this.matMenuTrigger.openMenu();

  // } 
  // closeMyMenu() {
  //   this.matMenuTrigger.closeMenu();
  // }
}
