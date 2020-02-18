import { Injectable } from '@angular/core';
import { HttpClientModule, HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { fooditem } from 'src/app/entities/Fooditem';

@Injectable({
  providedIn: 'root'
})
export class CreateFoodService {

  constructor(private http:HttpClient) { }

  url = "http://localhost:9000/food";

  createFood(food:fooditem): Promise<fooditem> {
    return this.http.post<fooditem>(this.url,
        {
          headers: new HttpHeaders({'Content-Type': 'application/json'}),
          params: new HttpParams()
        .set('food', food.toString())
      }
    ).toPromise();
  }
}
