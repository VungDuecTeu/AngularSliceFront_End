import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Account } from '../../entities/Account';
import { BillService } from '../billservice/bill.service';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http:HttpClient){}
  Url = "http://ec2-3-14-9-87.us-east-2.compute.amazonaws.com:9000/account";

  getAccountByid(id:number):Promise<Account>  { 
    return this.http.get<Account>(`http://ec2-3-14-9-87.us-east-2.compute.amazonaws.com:9000/account/${id}`,
     {// httpOptions
      headers: new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded'}),
      params: new HttpParams()
      .set('id',id.toString())
     } 
      ).toPromise();
  }

  getAccountByUsername(name:string, pass:string):Promise<Account>  { 
    let account = new Account(0, name,pass, ""
    ,"","", -1);

    return this.http.post<Account>
    (this.Url + "/login", account,
    {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
    }).toPromise();
  }

  creatAccount(account:Account):Promise<any>  { 

    const body= new HttpParams().set('payload',JSON.stringify(Account));
    return this.http.post<Account>(`http://ec2-3-14-9-87.us-east-2.compute.amazonaws.com:9000/account`,account
    
     ).toPromise();
  }
  getAllAccounts():Promise<any>  { 
    return this.http.get<Account>(`http://ec2-3-14-9-87.us-east-2.compute.amazonaws.com:9000/account`
     
     ).toPromise();
  }
  updateAccount(Account:any):Promise<Account>  { 
    const body= new HttpParams().set('payload',JSON.stringify(Account));
    return this.http.post<Account>(this.Url,
     {// httpOptions
      headers: new HttpHeaders({'Content-Type':'application/json'}),
      params: new HttpParams()
      
      .set('id',Account.toString())
     } 
     ).toPromise();
  }
  deleteAccount(aid:number):Promise<Account>  { 
    return this.http.get<Account>(this.Url,
     {// httpOptions
      headers: new HttpHeaders({'Content-Type':'application/json'}),
      params: new HttpParams()
      
      .set('id',aid.toString())
     } 
     ).toPromise();
  }
}

