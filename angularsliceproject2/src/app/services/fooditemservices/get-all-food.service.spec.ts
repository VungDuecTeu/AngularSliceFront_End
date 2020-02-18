import { TestBed } from '@angular/core/testing';

import { GetAllFoodService } from './get-all-food.service';

describe('GetAllFoodService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetAllFoodService = TestBed.get(GetAllFoodService);
    expect(service).toBeTruthy();
  });
});
