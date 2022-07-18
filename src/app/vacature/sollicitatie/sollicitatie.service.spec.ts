import { TestBed } from '@angular/core/testing';

import { SollicitatieService } from './sollicitatie.service';

describe('SollicitatieService', () => {
  let service: SollicitatieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SollicitatieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
