import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private useridsource = new BehaviorSubject<number>(-1);
  currentuserid = this.useridsource.asObservable();

  changeUserId(userid: number){
    this.useridsource.next(userid);
  }

  constructor() { }
}
