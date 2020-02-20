import { Injectable } from '@angular/core';
import { HttpClientModule, HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Bill_Fooditem } from 'src/app/entities/Bill_Fooditem';
import { promise } from 'protractor';

@Injectable({
  providedIn: 'root'
})

export class BillFooditemService {

  constructor(private http:HttpClient) { }

  url = "http://ec2-3-14-9-87.us-east-2.compute.amazonaws.com:9000/billfooditems/";

  getBillFooditemByBillId(id:number): Promise<Bill_Fooditem> {
    return this.http.get<Bill_Fooditem>(this.url + "billfooditem",
        { // httpOptions
          headers: new HttpHeaders({'Content-Type': 'application/json'}),
          params: new HttpParams()
        .set('bfiid', id.toString())
      }
    ).toPromise();
  }
  getAllBillFooditems(): Promise<any> {
    return this.http.get<Bill_Fooditem>(this.url,
        { // httpOptions
          headers: new HttpHeaders({'Content-Type': 'application/json'}),
      }
    ).toPromise();
  }

  getBillFooditemByBillFooditemId(bid:number): Promise<any>{
    return this.http.get<any>(this.url + "bill",
  {
    headers: new HttpHeaders({'Content-Type': 'application/json'}),
    params: new HttpParams().set('bid',bid.toString())
  }).toPromise();
}

  updateBillFooditem(id:number): Promise<any> {
    return this.http.get<Bill_Fooditem>(this.url,
        { // httpOptions
          headers: new HttpHeaders({'Content-Type': 'application/json'}),
          params: new HttpParams()
        .set('bfiid', id.toString())
      }
    ).toPromise();
  }
  createBillFooditem(bill_fooditem:number): Promise<any> {
    return this.http.get<Bill_Fooditem>(this.url,
        { // httpOptions
          headers: new HttpHeaders({'Content-Type': 'application/json'}),
          params: new HttpParams()
        .set('bfiid', bill_fooditem.toString())
      }
    ).toPromise();
  }
  deleteBillFooditem(id:number): Promise<Bill_Fooditem> {
    return this.http.get<Bill_Fooditem>(this.url,
        { // httpOptions
          headers: new HttpHeaders({'Content-Type': 'application/json'}),
          params: new HttpParams()
        .set('bfiid', id.toString())
      }
    ).toPromise();
  }
}
