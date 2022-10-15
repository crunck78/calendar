import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekColumnComponent } from './week-column.component';

describe('WeekColumnComponent', () => {
  let component: WeekColumnComponent;
  let fixture: ComponentFixture<WeekColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeekColumnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeekColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
