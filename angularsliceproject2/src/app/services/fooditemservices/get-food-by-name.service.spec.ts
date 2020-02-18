import { TestBed } from '@angular/core/testing';

import { GetFoodByNameService } from './get-food-by-name.service';

describe('GetFoodByNameService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetFoodByNameService = TestBed.get(GetFoodByNameService);
    expect(service).toBeTruthy();
  });
});
