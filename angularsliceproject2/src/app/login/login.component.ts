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
        
        this.dataserv.changeAccount(onfulfilled);
        this.router.navigate(['/home']);
        return onfulfilled;
      }else{
        alert("The username or password were incorrect!");
      }
    });
    // .then((unfulfilled) =>{
    //   // make alert or something
      
    //   console.log("login error");
      
    // });  
   
  }
}
