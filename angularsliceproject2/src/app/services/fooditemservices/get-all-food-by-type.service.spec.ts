import { TestBed } from '@angular/core/testing';

import { GetAllFoodByTypeService } from './get-all-food-by-type.service';

describe('GetAllFoodByTypeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetAllFoodByTypeService = TestBed.get(GetAllFoodByTypeService);
    expect(service).toBeTruthy();
  });
});
