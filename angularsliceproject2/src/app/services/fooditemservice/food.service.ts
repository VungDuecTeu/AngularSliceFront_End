import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Fooditem } from 'src/app/entities/Fooditem';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  order:Array<Fooditem> = [];
  orderAmounts:Array<number> = [];
  total:number;

  constructor(private http:HttpClient) { }

  moveOrder(sentOrder:Array<Fooditem>, sentAmounts:Array<number>, sentTotal:number){
    this.order = sentOrder;
    this.orderAmounts = sentAmounts;
    this.total = sentTotal;

    console.log("moveOrder")
    console.log(this.order);
    console.log(this.orderAmounts);
    console.log(this.total);
  }

  createFoodurl = "http://ec2-3-14-9-87.us-east-2.compute.amazonaws.com:9000//food";

  createFood(food:Fooditem): Promise<Fooditem> {
    return this.http.post<Fooditem>(this.createFoodurl,
        {
          headers: new HttpHeaders({'Content-Type': 'application/json'}),
          params: new HttpParams()
        .set('food', food.toString())
      }
    ).toPromise();
  }

  getAllFoodByTypeurl = "http://ec2-3-14-9-87.us-east-2.compute.amazonaws.com:9000//food/type";

  getAllFoodByType(type:string): Promise<Fooditem> {
    return this.http.get<Fooditem>(this.getAllFoodByTypeurl,
        {
          headers: new HttpHeaders({'Content-Type': 'application/json'}),
          params: new HttpParams()
        .set('type', type.toString())
      }
    ).toPromise();
  }

  getAllFoodurl = "http://ec2-3-14-9-87.us-east-2.compute.amazonaws.com:9000//food";

  getAllFood(): Promise<any>{
    return this.http.get<any>(this.getAllFoodurl).toPromise();
  }

  getFoodByIdurl = "http://ec2-3-14-9-87.us-east-2.compute.amazonaws.com:9000//food/id";

  getFoodById(id:number): Promise<Fooditem> {
    return this.http.get<Fooditem>(this.getFoodByIdurl,
        {
          headers: new HttpHeaders({'Content-Type': 'application/json'}),
          params: new HttpParams()
        .set('id', id.toString())
      }
    ).toPromise();
  }

  getFoodByNameurl = "http://ec2-3-14-9-87.us-east-2.compute.amazonaws.com:9000//food/name";

  getFoodByName(name:string): Promise<Fooditem> {
    return this.http.get<Fooditem>(this.getFoodByNameurl,
        {
          headers: new HttpHeaders({'Content-Type': 'application/json'}),
          params: new HttpParams()
        .set('name', name.toString())
      }
    ).toPromise();
  }

  updateFoodurl = "http://ec2-3-14-9-87.us-east-2.compute.amazonaws.com:9000//food";

  updateFood(food:Fooditem): Promise<Fooditem> {
    return this.http.put<Fooditem>(this.updateFoodurl,
        {
          headers: new HttpHeaders({'Content-Type': 'application/json'}),
          params: new HttpParams()
        .set('food', food.toString())
      }
    ).toPromise();
  }

}
