import { TestBed } from '@angular/core/testing';

import { CreateFoodService } from './create-food.service';

describe('CreateFoodService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreateFoodService = TestBed.get(CreateFoodService);
    expect(service).toBeTruthy();
  });
});
