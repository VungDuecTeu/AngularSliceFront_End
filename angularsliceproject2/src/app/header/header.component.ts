import { Component, OnInit, ViewChild } from '@angular/core';
import {MatMenuTrigger, MatTabChangeEvent} from '@angular/material';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { userInfo } from 'os';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  //@ViewChild(MatMenuTrigger) matMenuTrigger: MatMenuTrigger;
  loginInfo:boolean;
  
  constructor(private router: Router,private data: DataService) { }
  public selectedIndex: number = 0;
  public accountName:string = "";
  public accountId:number = 0;

  ngOnInit() {
    this.loginInfo = false;
    this.data.currentuserid.subscribe(user => this.accountName = user.username);
    console.log("Current user's Username: " + this.accountName)
    this.data.currentuserid.subscribe(user => this.accountId = user.aid);
    console.log("Current user's ID: " + this.accountId)
    if(this.accountId != 0){
      this.loginInfo = true;
    }
    
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
