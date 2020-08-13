import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Bill } from '../../entities/Bill';

@Injectable({
  providedIn: 'root'
})
export class BillService {

  constructor(private http:HttpClient) { }
 
  getBillByid(id:number):Promise<Bill>  { 
    return this.http.get<Bill>(`http://localhost:9000/bill/${id}`).toPromise();
  }

  creatBillUrl = "http://localhost:9000/bill"
  creatBill(bill:Bill):Promise<Bill>  { 
    return this.http.post<Bill>(this.creatBillUrl, bill).toPromise();
  }

  getAllBillsUrl = "http://localhost:9000/bill"
  getAllBills():Promise<any>  { 
    return this.http.get<Bill>(this.getAllBillsUrl).toPromise();
  }

  updateBillsUrl = "http://localhost:9000/bill"
  updateBills(bill:Bill):Promise<Bill>  { 
    return this.http.put<Bill>(this.updateBillsUrl, bill).toPromise();
  }

  deleteBill(id:number):Promise<Bill>  { 
    return this.http.delete<Bill>(`http://localhost:9000/bill/${id}`).toPromise();
  }
}
