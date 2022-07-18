import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SollicitatieListComponent } from './sollicitatie-list.component';

describe('SollicitatieListComponent', () => {
  let component: SollicitatieListComponent;
  let fixture: ComponentFixture<SollicitatieListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SollicitatieListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SollicitatieListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
