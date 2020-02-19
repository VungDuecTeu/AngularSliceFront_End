import { Component, OnInit } from '@angular/core';
import {Account} from '../entities/account';
import { DataService} from '../services/data.service';
import { Router } from '@angular/router';
import { AccountService } from '../services/accountservice/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide:boolean = true;
  username:string;
  password:string;
  constructor(private account:AccountService, private datas: DataService, private router:Router) { }

  ngOnInit() {
  }

  async login(){
    

    let data:Account = await this.account.getAccountByUsername(this.username);
    if(data != null){
      this.hide = true;
      this.datas.changeUserId(data.aid);
      this.router.navigate(['/home']);


    }else{
      this.hide = false;
    }
  }
}
