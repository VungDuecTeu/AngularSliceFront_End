import { Injectable } from '@angular/core';
import { HttpClientModule, HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Bill_Fooditem } from 'src/app/entities/Bill_Fooditem';

@Injectable({
  providedIn: 'root'
})

export class GetBillFooditemByBillIdService {

  constructor(private http:HttpClient) { }

  url = "http://localhost:9000/billFooditems/billFooditem";

  getBillFooditemByBillId(id:number): Promise<Bill_Fooditem> {
    return this.http.get<Bill_Fooditem>(this.url,
        { // httpOptions
          headers: new HttpHeaders({'Content-Type': 'application/json'}),
          params: new HttpParams()
        .set('bfiid', id.toString())
      }
    ).toPromise();
  }
}
