import { TestBed } from '@angular/core/testing';

import { BedrijfService } from './bedrijf.service';

describe('BedrijfService', () => {
  let service: BedrijfService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BedrijfService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
