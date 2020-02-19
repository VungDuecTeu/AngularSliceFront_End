import { Injectable } from '@angular/core';
import { HttpClientModule, HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { account } from 'src/app/entities/account';

@Injectable({
  providedIn: 'root'
})

export class getAccount {

  constructor(private http:HttpClient) { }

  url:string;
  getAccountByUsername(user:string, pass:string): Promise<account> {
    
    this.url = `http://localhost:9000/account/${user}&${pass}`;
    return this.http.get<account>(this.url).toPromise();
  }
}

// let params = new HttpParams().set('aaa', 'A');    // now it has aaa
// params = params.set('bbb', 'B'); 