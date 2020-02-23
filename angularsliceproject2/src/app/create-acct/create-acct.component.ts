import { Component, OnInit } from '@angular/core';
import {Account} from '../entities/account';
import { DataService} from '../services/data.service';
import { Router } from '@angular/router';
import { AccountService } from '../services/accountservice/account.service';

@Component({
  selector: 'app-create-acct',
  templateUrl: './create-acct.component.html',
  styleUrls: ['./create-acct.component.css']
})
export class CreateAcctComponent implements OnInit {

  hide:boolean = true;
  data:any;
  aid:number =0;
  username:string = "";
  password:string = "";
  email: string = "Optional@gmail.com";
  fname: string = "Optional";
  lname: string = "Optional";
  isManager:number=0;
  constructor(private account:AccountService, private dataserv: DataService, private router:Router) { }

  ngOnInit() {
  }
 
 

   async signUp(){
     console.log(this.username, "  ", this.password)
    if (this.username!=""&&this.password!="") {
      
      let Newaccount= new Account( this.aid,this.username,this.password, this.email,this.fname,this.lname, this.isManager);
      console.log(Newaccount);
      await this.account.creatAccount(Newaccount).then((onfulfilled)=>{
        console.log("This is the returned account: ", onfulfilled);
        if(onfulfilled != null){
          this.dataserv.changeAccount(onfulfilled);
          this.router.navigate(['/home']);
          return onfulfilled;
        }else{ 
          alert("That username is already in use, please use a different one!")
        } 
      }) 
    }else {
      alert("Please fill in the required fields!!!!")
    }
   
   }

   home(){
    this.router.navigate(['/home']);
   }
}
