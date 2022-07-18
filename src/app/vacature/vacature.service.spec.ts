import { TestBed } from '@angular/core/testing';

import { VacatureService } from './vacature.service';

describe('VacatureService', () => {
  let service: VacatureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VacatureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
