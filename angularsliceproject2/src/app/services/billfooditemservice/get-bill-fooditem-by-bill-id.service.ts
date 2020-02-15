import { Injectable } from '@angular/core';
import { HttpClientModule, HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { bill_fooditem } from 'src/entities/bill_fooditem';

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
        .set('bid', id.toString())
      }
    ).toPromise();
  }
}
