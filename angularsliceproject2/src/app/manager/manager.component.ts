import { Component, OnInit } from '@angular/core';
import { GetBillFooditemByBillIdService } from '../services/billfooditemservice/get-bill-fooditem-by-bill-id.service';
import { bill_fooditem } from 'src/app/entities/bill_fooditem';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {

  constructor(private getbillfooditembyidservice:GetBillFooditemByBillIdService) { }

  bfiid:number = 0;
  bfi: bill_fooditem = null;

  ngOnInit() {
  }

  async GetBillFooditemByBillIdService(id:number) {
    let special : bill_fooditem = await this.getbillfooditembyidservice.getBillFooditemByBillId(id)
    .then((onfulfilled) => {
      this.bfi = onfulfilled;
      console.log(this.bfi);
      return onfulfilled;
    })
  }


}
