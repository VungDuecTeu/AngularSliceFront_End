import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Bill } from '../../entities/Bill';

@Injectable({
  providedIn: 'root'
})
export class BillService {

  constructor(private http:HttpClient) { }
  Url = "http://locallhost:9000/Bill";

  getBillByid(id:number):Promise<Bill>  { 
    return this.http.get<Bill>(this.Url,
     {// httpOptions
      headers: new HttpHeaders({'Content-Type':'application/json'}),
      params: new HttpParams()
      .set('bfiid',id.toString())
     } 
     ).toPromise();
  }
  creatBill(bill:any):Promise<Bill>  { 
    return this.http.get<Bill>(this.Url,
     {// httpOptions
      headers: new HttpHeaders({'Content-Type':'application/json'}),
      params: new HttpParams()
      
      .set('bfiid',bill.toString())
     } 
     ).toPromise();
  }
  getAllBills(bid:number):Promise<Bill>  { 
    return this.http.get<Bill>(this.Url,
     {// httpOptions
      headers: new HttpHeaders({'Content-Type':'application/json'}),
      params: new HttpParams()
      
      .set('bfiid',bid.toString())
     } 
     ).toPromise();
  }
  updateBills(bid:number):Promise<Bill>  { 
    return this.http.get<Bill>(this.Url,
     {// httpOptions
      headers: new HttpHeaders({'Content-Type':'application/json'}),
      params: new HttpParams()
      
      .set('bfiid',bid.toString())
     } 
     ).toPromise();
  }
  deleteBill(bid:number):Promise<Bill>  { 
    return this.http.get<Bill>(this.Url,
     {// httpOptions
      headers: new HttpHeaders({'Content-Type':'application/json'}),
      params: new HttpParams()
      
      .set('bfiid',bid.toString())
     } 
     ).toPromise();
  }
}
