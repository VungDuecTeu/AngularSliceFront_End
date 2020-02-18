import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { account } from '../entities/account';
import { BillService } from './bill.service';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http:HttpClient){}
  Url = "http://localhost:4200/Account";

  getAccountByid(id:number):Promise<account>  { 
    return this.http.get<account>(`http://localhost:4200/account/${id}`
     {// httpOptions
      headers: new HttpHeaders({'Content-Type':'application/json'}),
      params: new HttpParams()
      .set('bfiid',id.toString())
     } 
      ).toPromise;
  }
  creatAccount(account:Account):Promise<account>  { 

    const body= new HttpParams().set('payload',JSON.stringify(account));
    return this.http.post<account>(`http://localhost:4200/account`,account
    
     ).toPromise();
  }
  getAllAccounts(aid:number):Promise<account>  { 
    return this.http.get<account>(`http://localhost:4200/account`
     
     ).toPromise();
  }
  updateAccount(account:any):Promise<account>  { 
    const body= new HttpParams().set('payload',JSON.stringify(account));
    return this.http.post<account>(this.Url,
     {// httpOptions
      headers: new HttpHeaders({'Content-Type':'application/json'}),
      params: new HttpParams()
      
      .set('bfiid',account.toString())
     } 
     ).toPromise();
  }
  deleteAccount(aid:number):Promise<account>  { 
    return this.http.get<account>(this.Url,
     {// httpOptions
      headers: new HttpHeaders({'Content-Type':'application/json'}),
      params: new HttpParams()
      
      .set('bfiid',aid.toString())
     } 
     ).toPromise();
  }
}

