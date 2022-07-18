import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SollicitatieDetailComponent } from './sollicitatie-detail.component';

describe('SollicitatieDetailComponent', () => {
  let component: SollicitatieDetailComponent;
  let fixture: ComponentFixture<SollicitatieDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SollicitatieDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SollicitatieDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
