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
  loginInfo:string;
  constructor(private router: Router) { }
  public selectedIndex: number = 0;

  ngOnInit() {
    this.loginInfo = "";
  }

  

  login(){
    this.router.navigateByUrl('/login');
  }
  signUp(){
    this.router.navigateByUrl('/create');
  }

  // openMyMenu() {
  //   this.matMenuTrigger.openMenu();

  // } 
  // closeMyMenu() {
  //   this.matMenuTrigger.closeMenu();
  // }


}
