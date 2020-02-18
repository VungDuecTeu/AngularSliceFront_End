import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { bill } from '../entities/bill';

@Injectable({
  providedIn: 'root'
})
export class BillService {

  constructor(private http:HttpClient) { }
  Url = "http://locallhost:9000/Bill";

  getBillByid(id:number):Promise<bill>  { 
    return this.http.get<bill>(this.Url,
     {// httpOptions
      headers: new HttpHeaders({'Content-Type':'application/json'}),
      params: new HttpParams()
      .set('bfiid',id.toString())
     } 
     ).toPromise();
  }
  creatBill(bill:any):Promise<bill>  { 
    return this.http.get<bill>(this.Url,
     {// httpOptions
      headers: new HttpHeaders({'Content-Type':'application/json'}),
      params: new HttpParams()
      
      .set('bfiid',bill.toString())
     } 
     ).toPromise();
  }
  getAllBills(bid:number):Promise<bill>  { 
    return this.http.get<bill>(this.Url,
     {// httpOptions
      headers: new HttpHeaders({'Content-Type':'application/json'}),
      params: new HttpParams()
      
      .set('bfiid',bid.toString())
     } 
     ).toPromise();
  }
  updateBills(bid:number):Promise<bill>  { 
    return this.http.get<bill>(this.Url,
     {// httpOptions
      headers: new HttpHeaders({'Content-Type':'application/json'}),
      params: new HttpParams()
      
      .set('bfiid',bid.toString())
     } 
     ).toPromise();
  }
  deleteBill(bid:number):Promise<bill>  { 
    return this.http.get<bill>(this.Url,
     {// httpOptions
      headers: new HttpHeaders({'Content-Type':'application/json'}),
      params: new HttpParams()
      
      .set('bfiid',bid.toString())
     } 
     ).toPromise();
  }
}
