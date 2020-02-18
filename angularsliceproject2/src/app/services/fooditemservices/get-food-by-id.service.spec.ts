import { TestBed } from '@angular/core/testing';

import { GetFoodByIdService } from './get-food-by-id.service';

describe('GetFoodByIdService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetFoodByIdService = TestBed.get(GetFoodByIdService);
    expect(service).toBeTruthy();
  });
});
