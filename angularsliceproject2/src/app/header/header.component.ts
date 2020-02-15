import { Component, OnInit, ViewChild } from '@angular/core';
import {MatMenuTrigger} from '@angular/material';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  //@ViewChild(MatMenuTrigger) matMenuTrigger: MatMenuTrigger;

  constructor() { }

  ngOnInit() {
  }

  // openMyMenu() {
  //   this.matMenuTrigger.openMenu();

  // } 
  // closeMyMenu() {
  //   this.matMenuTrigger.closeMenu();
  // }
}
