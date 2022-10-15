import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

export interface WeekDay{
  name : string,
  index : number,
  monthIndex : number
}

@Component({
  selector: 'app-week-column',
  templateUrl: './week-column.component.html',
  styleUrls: ['./week-column.component.scss']
})
export class WeekColumnComponent implements OnInit, OnChanges {

  // @Input () weekDay : WeekDay = {name : "Monday", index : 0};
  weeksPerMonth = [1, 2, 3, 4, 5, 6];

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {

  }

  ngOnInit(): void {
  }

}
