import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnChanges {
  @Input() date! : Date;
  readonly MONTHS_PER_YEAR = 12;
  monthDates : Date[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['date'].currentValue)
      this.createDatesForEachMonth();
  }

  private createDatesForEachMonth(){
    this.monthDates = [];
    for (let monthIndex = 0; monthIndex < this.MONTHS_PER_YEAR; monthIndex++) {
      this.monthDates.push(new Date(this.date.getFullYear(), monthIndex, 1))
    }
    console.log(this.monthDates);
  }

}
