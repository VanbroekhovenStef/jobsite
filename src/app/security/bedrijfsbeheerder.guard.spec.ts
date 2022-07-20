import { TestBed } from '@angular/core/testing';

import { BedrijfsbeheerderGuard } from './bedrijfsbeheerder.guard';

describe('BedrijfsbeheerderGuard', () => {
  let guard: BedrijfsbeheerderGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(BedrijfsbeheerderGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
