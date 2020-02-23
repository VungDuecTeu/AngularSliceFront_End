import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Bill } from '../../entities/Bill';

@Injectable({
  providedIn: 'root'
})
export class BillService {

  constructor(private http:HttpClient) { }
 
  getBillByid(id:number):Promise<Bill>  { 
    return this.http.get<Bill>(`http://ec2-3-14-9-87.us-east-2.compute.amazonaws.com:9000//bill/${id}`).toPromise();
  }

  creatBillUrl = "http://ec2-3-14-9-87.us-east-2.compute.amazonaws.com:9000//bill"
  creatBill(bill:Bill):Promise<Bill>  { 
    return this.http.post<Bill>(this.creatBillUrl, bill).toPromise();
  }

  getAllBillsUrl = "http://ec2-3-14-9-87.us-east-2.compute.amazonaws.com:9000//bill"
  getAllBills():Promise<any>  { 
    return this.http.get<Bill>(this.getAllBillsUrl).toPromise();
  }

  updateBillsUrl = "http://ec2-3-14-9-87.us-east-2.compute.amazonaws.com:9000//bill"
  updateBills(bill:Bill):Promise<Bill>  { 
    return this.http.put<Bill>(this.updateBillsUrl, bill).toPromise();
  }

  deleteBill(id:number):Promise<Bill>  { 
    return this.http.delete<Bill>(`http://ec2-3-14-9-87.us-east-2.compute.amazonaws.com:9000//bill/${id}`).toPromise();
  }
}
