import { TestBed, inject } from '@angular/core/testing';

import { AnotherServiceService } from './another-service.service';

describe('AnotherServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AnotherServiceService]
    });
  });

  it('should be created', inject([AnotherServiceService], (service: AnotherServiceService) => {
    expect(service).toBeTruthy();
  }));
});
