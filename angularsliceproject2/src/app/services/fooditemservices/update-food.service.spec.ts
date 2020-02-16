import { TestBed } from '@angular/core/testing';

import { UpdateFoodService } from './update-food.service';

describe('UpdateFoodService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UpdateFoodService = TestBed.get(UpdateFoodService);
    expect(service).toBeTruthy();
  });
});
