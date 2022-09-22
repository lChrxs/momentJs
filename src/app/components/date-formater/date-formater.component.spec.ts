import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateFormaterComponent } from './date-formater.component';

describe('DateFormaterComponent', () => {
  let component: DateFormaterComponent;
  let fixture: ComponentFixture<DateFormaterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DateFormaterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DateFormaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
