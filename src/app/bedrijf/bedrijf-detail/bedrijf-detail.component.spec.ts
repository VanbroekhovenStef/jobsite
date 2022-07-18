import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BedrijfDetailComponent } from './bedrijf-detail.component';

describe('BedrijfDetailComponent', () => {
  let component: BedrijfDetailComponent;
  let fixture: ComponentFixture<BedrijfDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BedrijfDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BedrijfDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
