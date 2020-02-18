import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { fooditem } from 'src/app/entities/Fooditem';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private http:HttpClient) { }

  createFoodurl = "http://localhost:9000/food";

  createFood(food:fooditem): Promise<fooditem> {
    return this.http.post<fooditem>(this.createFoodurl,
        {
          headers: new HttpHeaders({'Content-Type': 'application/json'}),
          params: new HttpParams()
        .set('food', food.toString())
      }
    ).toPromise();
  }

  getAllFoodByTypeurl = "http://localhost:9000/food/type";

  getAllFoodByType(type:string): Promise<fooditem> {
    return this.http.get<fooditem>(this.getAllFoodByTypeurl,
        {
          headers: new HttpHeaders({'Content-Type': 'application/json'}),
          params: new HttpParams()
        .set('type', type.toString())
      }
    ).toPromise();
  }

  getAllFoodurl = "http://localhost:9000/food";

  getAllFood(): Promise<fooditem>{
    return this.http.get<fooditem>(this.getAllFoodurl).toPromise();
  }

  getFoodByIdurl = "http://localhost:9000/food/id";

  getFoodById(id:number): Promise<fooditem> {
    return this.http.get<fooditem>(this.getFoodByIdurl,
        {
          headers: new HttpHeaders({'Content-Type': 'application/json'}),
          params: new HttpParams()
        .set('id', id.toString())
      }
    ).toPromise();
  }

  getFoodByNameurl = "http://localhost:9000/food/name";

  getFoodByName(name:string): Promise<fooditem> {
    return this.http.get<fooditem>(this.getFoodByNameurl,
        {
          headers: new HttpHeaders({'Content-Type': 'application/json'}),
          params: new HttpParams()
        .set('name', name.toString())
      }
    ).toPromise();
  }

  updateFoodurl = "http://localhost:9000/food";

  updateFood(food:fooditem): Promise<fooditem> {
    return this.http.put<fooditem>(this.updateFoodurl,
        {
          headers: new HttpHeaders({'Content-Type': 'application/json'}),
          params: new HttpParams()
        .set('food', food.toString())
      }
    ).toPromise();
  }

}
