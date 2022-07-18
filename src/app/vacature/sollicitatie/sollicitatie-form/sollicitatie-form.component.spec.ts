import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SollicitatieFormComponent } from './sollicitatie-form.component';

describe('SollicitatieFormComponent', () => {
  let component: SollicitatieFormComponent;
  let fixture: ComponentFixture<SollicitatieFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SollicitatieFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SollicitatieFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
