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
  data:any;
  username:string = "";
  password:string = "";
  constructor(private account:AccountService, private dataserv: DataService, private router:Router) { }

  ngOnInit() {
  }

  async login(){
    
    await this.account.getAccountByUsername(this.username, this.password)
    .then((onfulfilled)=>{
      if(onfulfilled != null){
        this.hide = true;
        this.dataserv.changeAccount(onfulfilled);
        this.router.navigate(['/home']);
        return onfulfilled;
      }else{
        this.hide = false;
      }
    })
    .then((unfulfilled) =>{
      // make alert or something
      console.log("login error");
    });  
   
  }
}
