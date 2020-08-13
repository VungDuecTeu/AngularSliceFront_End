import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Food } from 'src/app/entities/Food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  order:Array<Food> = [];
  orderAmounts:Array<number> = [];
  total:number;

  constructor(private http:HttpClient) { }

  moveOrder(sentOrder:Array<Food>, sentAmounts:Array<number>, sentTotal:number){
    this.order = sentOrder;
    this.orderAmounts = sentAmounts;
    this.total = sentTotal;

    console.log("moveOrder")
    console.log(this.order);
    console.log(this.orderAmounts);
    console.log(this.total);
  }

  createFoodurl = "http://localhost:9000//food";

  createFood(food:Food): Promise<Food> {
    return this.http.post<Food>(this.createFoodurl, food).toPromise();
  }

  getAllFoodByTypeurl = "http://localhost:9000//food/type";

  getAllFoodByType(type:string): Promise<Food> {
    return this.http.get<Food>(this.getAllFoodByTypeurl,
        {
          headers: new HttpHeaders({'Content-Type': 'application/json'}),
          params: new HttpParams()
        .set('type', type.toString())
      }
    ).toPromise();
  }

  getAllFoodurl = "http://localhost:9000//food";
  getAllFood(): Promise<any>{
    return this.http.get<Food>(this.getAllFoodurl).toPromise();
  }

  getFoodByIdurl = "http://localhost:9000//food/id";

  getFoodById(id:number): Promise<Food> {
    return this.http.get<Food>(this.getFoodByIdurl,
        {
          headers: new HttpHeaders({'Content-Type': 'application/json'}),
          params: new HttpParams()
        .set('id', id.toString())
      }
    ).toPromise();
  }

  getFoodByNameurl = "http://localhost:9000//food/name";

  getFoodByName(name:string): Promise<Food> {
    return this.http.get<Food>(this.getFoodByNameurl,
        {
          headers: new HttpHeaders({'Content-Type': 'application/json'}),
          params: new HttpParams()
        .set('name', name.toString())
      }
    ).toPromise();
  }

  updateFoodurl = "http://localhost:9000//food";

  updateFood(food:Food): Promise<Food> {
    return this.http.put<Food>(this.updateFoodurl, food).toPromise();
  }

}
