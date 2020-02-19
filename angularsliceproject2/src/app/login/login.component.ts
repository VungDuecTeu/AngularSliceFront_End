import { Component, OnInit } from '@angular/core';
import { getAccount } from '../services/accountservice/get-account-by-username.service';
import {Account} from '../entities/account';
import { DataService} from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide:boolean = true;
  username:string;
  password:string;
  constructor(private getAccount:getAccount, private datas: DataService, private router:Router) { }

  ngOnInit() {
  }

  async login(){
    

    let data:Account = await this.getAccount.getAccountByUsername(this.username,this.password);
    if(data != null){
      this.hide = true;
      this.datas.changeUserId(data.aid);
      this.router.navigate(['/home']);


    }else{
      this.hide = false;
    }
  }
}
