import { Injectable } from '@angular/core';
import { HttpClientModule, HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Fooditem } from 'src/app/entities/Fooditem';

@Injectable({
  providedIn: 'root'
})
export class GetFoodByNameService {

  constructor(private http:HttpClient) { }

  url = "http://localhost:9000/food/name";

  getFoodByName(name:string): Promise<Fooditem> {
    return this.http.get<Fooditem>(this.url,
        {
          headers: new HttpHeaders({'Content-Type': 'application/json'}),
          params: new HttpParams()
        .set('name', name.toString())
      }
    ).toPromise();
  }
}
