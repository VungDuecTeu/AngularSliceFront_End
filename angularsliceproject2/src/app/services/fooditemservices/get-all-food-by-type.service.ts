import { Injectable } from '@angular/core';
import { HttpClientModule, HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { fooditem } from 'src/app/entities/fooditem';

@Injectable({
  providedIn: 'root'
})
export class GetAllFoodByTypeService {

  constructor(private http:HttpClient) { }

  url = "http://localhost:9000/food/type";

  getAllFoodByType(type:string): Promise<fooditem> {
    return this.http.get<fooditem>(this.url,
        {
          headers: new HttpHeaders({'Content-Type': 'application/json'}),
          params: new HttpParams()
        .set('type', type.toString())
      }
    ).toPromise();
  }
}
