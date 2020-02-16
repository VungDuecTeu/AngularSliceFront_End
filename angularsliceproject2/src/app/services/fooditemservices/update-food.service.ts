import { Injectable } from '@angular/core';
import { HttpClientModule, HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { fooditem } from 'src/app/entities/fooditem';

@Injectable({
  providedIn: 'root'
})
export class UpdateFoodService {

  constructor(private http:HttpClient) { }

  url = "http://localhost:9000/food";

  updateFood(food:fooditem): Promise<fooditem> {
    return this.http.put<fooditem>(this.url,
        {
          headers: new HttpHeaders({'Content-Type': 'application/json'}),
          params: new HttpParams()
        .set('food', food.toString())
      }
    ).toPromise();
  }
}
