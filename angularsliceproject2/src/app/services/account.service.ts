import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Account } from '../entities/Account';


@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http:HttpClient){}

  getAccountByid(id:number):Promise<Account>  { 
    return this.http.get<Account>(`http://ec2-3-14-9-87.us-east-2.compute.amazonaws.com:9000//account/${id}`).toPromise();
  }

  creatAccountUrl = "http://ec2-3-14-9-87.us-east-2.compute.amazonaws.com:9000//account";
  creatAccount(account:Account):Promise<Account>  { 
    return this.http.post<Account>(this.creatAccountUrl, account).toPromise();
  }

  getAllAccountUrl = "http://ec2-3-14-9-87.us-east-2.compute.amazonaws.com:9000//account";
  getAllAccounts():Promise<Account>  { 
    return this.http.get<Account>(this.getAllAccountUrl).toPromise();
  }

  updateAccountUrl = "http://ec2-3-14-9-87.us-east-2.compute.amazonaws.com:9000//account";
  updateAccount(account:Account):Promise<Account>  { 
    return this.http.put<Account>(this.updateAccountUrl, account).toPromise();
  }

  // deleteAccountUrl = "http://ec2-3-14-9-87.us-east-2.compute.amazonaws.com:9000//account";
  // deleteAccount(aid:number):Promise<Account>  { 
  //   return this.http.get<Account>(this.deleteAccountUrl,
  //    {
  //     headers: new HttpHeaders({'Content-Type':'application/json'}),
  //     params: new HttpParams()
  //     .set('accou',account.toString())
  //    } 
  //    ).toPromise();
  // }
}
