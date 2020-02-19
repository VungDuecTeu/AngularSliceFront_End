import { Injectable } from '@angular/core';
import { HttpClientModule, HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Account } from 'src/app/entities/account';

@Injectable({
  providedIn: 'root'
})

export class getAccount {

  constructor(private http:HttpClient) { }

  url:string;
  getAccountByUsername(user:string, pass:string): Promise<Account> {
    
    this.url = `http://ec2-3-14-9-87.us-east-2.compute.amazonaws.com:9000//account/${user}&${pass}`;
    return this.http.get<Account>(this.url).toPromise();
  }
}

// let params = new HttpParams().set('aaa', 'A');    // now it has aaa
// params = params.set('bbb', 'B'); 