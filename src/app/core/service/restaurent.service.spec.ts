import { TestBed, inject } from '@angular/core/testing';

import { RestaurentService } from './restaurent.service';

describe('RestaurentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RestaurentService]
    });
  });

  it('should be created', inject([RestaurentService], (service: RestaurentService) => {
    expect(service).toBeTruthy();
  }));
});
