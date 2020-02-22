import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Account } from '../entities/account';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  private userAccount = new BehaviorSubject<Account>(null);
  currentuserid = this.userAccount.asObservable();

  private billidsource = new BehaviorSubject<number>(-1);
  currentbillid = this.billidsource.asObservable();

  changeAccount(account: Account):void{
    this.userAccount.next(account);
  }

  changeBillId(billid: number):void{
    this.billidsource.next(billid);
  }

  constructor() { }
}
