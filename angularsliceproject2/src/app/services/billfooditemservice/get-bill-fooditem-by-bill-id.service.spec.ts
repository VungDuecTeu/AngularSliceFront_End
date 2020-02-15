import { TestBed } from '@angular/core/testing';

import { GetBillFooditemByBillIdService } from './get-bill-fooditem-by-bill-id.service';

describe('GetBillFooditemByBillIdService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetBillFooditemByBillIdService = TestBed.get(GetBillFooditemByBillIdService);
    expect(service).toBeTruthy();
  });
});
