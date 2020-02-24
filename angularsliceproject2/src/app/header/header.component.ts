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
  managerInfo: boolean = false;
  
  constructor(private router: Router,private data: DataService) { }
  public selectedIndex: number = 0;
  public accountName:string = "";
  public accountId:number = 0;
  public isManager:number = 0;

  ngOnInit() {
    this.loginInfo = false;
    this.data.currentuserid.subscribe(user => this.accountName = user.username);
    console.log("Current user's Username: " + this.accountName)
    this.data.currentuserid.subscribe(user => this.accountId = user.aid);
    console.log("Current user's ID: " + this.accountId)
    this.data.currentuserid.subscribe(user => this.isManager = user.isManager);
    console.log("Current user's manager Code: " + this.isManager)
    if(this.accountId != 0){
      this.loginInfo = true;
    }
    if(this.isManager == 1){
      this.managerInfo = true;
    }
    
  }

  

  login(){
    this.router.navigateByUrl('/login');
  }
  signUp(){
    this.router.navigateByUrl('/create');
  }
  logout(){
    // this.loginInfo = false;
    // this.managerInfo = false;
    // this.accountId = 0;
    // this.accountName= "";
    // this.router.navigateByUrl('/home');
    window.location.reload();
  }

  // openMyMenu() {
  //   this.matMenuTrigger.openMenu();

  // } 
  // closeMyMenu() {
  //   this.matMenuTrigger.closeMenu();
  // }


}
