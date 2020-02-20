import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private useridsource = new BehaviorSubject<number>(-1);
  currentuserid = this.useridsource.asObservable();

  private billidsource = new BehaviorSubject<number>(-1);
  currentbillid = this.billidsource.asObservable();

  changeUserId(userid: number){
    this.useridsource.next(userid);
  }

  changeBillId(billid: number){
    this.billidsource.next(billid);
  }

  constructor() { }
}
