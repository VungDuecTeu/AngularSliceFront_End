import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Account } from '../../entities/Account';
import { BillService } from '../billservice/bill.service';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http:HttpClient){}
  Url = "http://ec2-3-14-9-87.us-east-2.compute.amazonaws.com:9000/Account";

  // getAccountByid(id:number):Promise<Account>  { 
  //   return this.http.get<Account>(`http://ec2-3-14-9-87.us-east-2.compute.amazonaws.com:9000/Account/${id}`
  //    {// httpOptions
  //     headers: new HttpHeaders({'Content-Type':'application/json'}),
  //     params: new HttpParams()
  //     .set('bfiid',id.toString())
  //    } 
  //     ).toPromise;
  // }
  creatAccount(Account:Account):Promise<Account>  { 

    const body= new HttpParams().set('payload',JSON.stringify(Account));
    return this.http.post<Account>(`http://ec2-3-14-9-87.us-east-2.compute.amazonaws.com:9000/Account`,Account
    
     ).toPromise();
  }
  getAllAccounts(aid:number):Promise<Account>  { 
    return this.http.get<Account>(`http://ec2-3-14-9-87.us-east-2.compute.amazonaws.com:9000/Account`
     
     ).toPromise();
  }
  updateAccount(Account:any):Promise<Account>  { 
    const body= new HttpParams().set('payload',JSON.stringify(Account));
    return this.http.post<Account>(this.Url,
     {// httpOptions
      headers: new HttpHeaders({'Content-Type':'application/json'}),
      params: new HttpParams()
      
      .set('bfiid',Account.toString())
     } 
     ).toPromise();
  }
  deleteAccount(aid:number):Promise<Account>  { 
    return this.http.get<Account>(this.Url,
     {// httpOptions
      headers: new HttpHeaders({'Content-Type':'application/json'}),
      params: new HttpParams()
      
      .set('bfiid',aid.toString())
     } 
     ).toPromise();
  }
}

