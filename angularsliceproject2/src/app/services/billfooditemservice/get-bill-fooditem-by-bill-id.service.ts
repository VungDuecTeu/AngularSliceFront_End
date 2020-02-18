import { Injectable } from '@angular/core';
import { HttpClientModule, HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { bill_fooditem } from 'src/app/entities/bill_fooditem';

@Injectable({
  providedIn: 'root'
})

export class GetBillFooditemByBillIdService {

  constructor(private http:HttpClient) { }

  url = "http://localhost:9000/BillFooditems/query";

  getBillFooditemByBillId(id:number): Promise<bill_fooditem> {
    return this.http.get<bill_fooditem>(this.url,
        { // httpOptions
          headers: new HttpHeaders({'Content-Type': 'application/json'}),
          params: new HttpParams()
        .set('bfiid', id.toString())
      }
    ).toPromise();
  }
  getAllBillFooditems(id:number): Promise<bill_fooditem> {
    return this.http.get<bill_fooditem>(this.url,
        { // httpOptions
          headers: new HttpHeaders({'Content-Type': 'application/json'}),
          params: new HttpParams()
        .set('bfiid', id.toString())
      }
    ).toPromise();
  }
  updateBillFooditem(id:number): Promise<bill_fooditem> {
    return this.http.get<bill_fooditem>(this.url,
        { // httpOptions
          headers: new HttpHeaders({'Content-Type': 'application/json'}),
          params: new HttpParams()
        .set('bfiid', id.toString())
      }
    ).toPromise();
  }
  createBillFooditem(bill_fooditem:number): Promise<bill_fooditem> {
    return this.http.get<bill_fooditem>(this.url,
        { // httpOptions
          headers: new HttpHeaders({'Content-Type': 'application/json'}),
          params: new HttpParams()
        .set('bfiid', bill_fooditem.toString())
      }
    ).toPromise();
  }
  deleteBillFooditem(id:number): Promise<bill_fooditem> {
    return this.http.get<bill_fooditem>(this.url,
        { // httpOptions
          headers: new HttpHeaders({'Content-Type': 'application/json'}),
          params: new HttpParams()
        .set('bfiid', id.toString())
      }
    ).toPromise();
  }
}
