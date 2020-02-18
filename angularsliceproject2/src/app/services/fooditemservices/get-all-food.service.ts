import { Injectable } from '@angular/core';
import { HttpClientModule, HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { fooditem } from 'src/app/entities/Fooditem';

@Injectable({
  providedIn: 'root'
})
export class GetAllFoodService {

  constructor(private http:HttpClient) { }

  url = "http://localhost:9000/food";

  getAllFood(): Promise<fooditem>{
    return this.http.get<fooditem>(this.url).toPromise();
  }
}
