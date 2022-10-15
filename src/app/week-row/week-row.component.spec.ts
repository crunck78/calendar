import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekRowComponent } from './week-row.component';

describe('WeekRowComponent', () => {
  let component: WeekRowComponent;
  let fixture: ComponentFixture<WeekRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeekRowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeekRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
