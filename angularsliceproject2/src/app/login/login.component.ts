import { Component, OnInit } from '@angular/core';
import { getAccount } from '../services/accountservice/get-account-by-username.service';
import {account} from '../entities/account';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide:boolean = true;
  username:string;
  password:string;
  constructor(private getAccount:getAccount) { }

  ngOnInit() {
  }

  async login(){
    

    let data:account = await this.getAccount.getAccountByUsername(this.username,this.password);
    if(data != null){
      
    }


    if("values are not correct"){
      this.hide = false;
    }
  }
}
