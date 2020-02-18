import { TestBed } from '@angular/core/testing';

import { BillFooditemService } from './Bill_Fooditem.service';

describe('BillFooditemService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BillFooditemService = TestBed.get(BillFooditemService);
    expect(service).toBeTruthy();
  });
});
