import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacatureFormComponent } from './vacature-form.component';

describe('VacatureFormComponent', () => {
  let component: VacatureFormComponent;
  let fixture: ComponentFixture<VacatureFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VacatureFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VacatureFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
