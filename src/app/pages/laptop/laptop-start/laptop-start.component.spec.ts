import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaptopStartComponent } from './laptop-start.component';

describe('LaptopStartComponent', () => {
  let component: LaptopStartComponent;
  let fixture: ComponentFixture<LaptopStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaptopStartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaptopStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
