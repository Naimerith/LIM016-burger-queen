import { TestBed } from '@angular/core/testing';

import { SelectedDishesService } from './selected-dishes.service';

describe('SelectedDishesService', () => {
  let service: SelectedDishesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelectedDishesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
