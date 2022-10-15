import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-month',
  templateUrl: './month.component.html',
  styleUrls: ['./month.component.scss']
})
export class MonthComponent implements OnChanges {

  @Input() date!: Date;
  readonly DAYS_PER_WEEK = 7;
  weekDayDates: Date[] = [];


  ngOnChanges(changes: SimpleChanges): void {
    if(changes['date'].currentValue)
      this.createDatesForEachWeekDay();

    // this.date = new Date(this.year, this.month);
    // this.firstDay = this.date.toLocaleString('default', { weekday: 'long' });
    // console.log(this.firstDay);
    // for (let index = 0; index < 30; index++) {
    //   console.log(new Date(this.year, this.month, index));
    // }
    // this.weekDays.forEach((wd: string) => {
    //   const dates = [];
    //   let dayCounter = 0;
    //   let date = new Date(this.year, this.month, dayCounter);
    //   let dateMonth = date.getMonth() + 1;
    //   console.log(dateMonth, this.month);
    //   while (dateMonth == this.month) {
    //     if(date.toLocaleString('default', {weekday : 'long'}) == wd){
    //       dates.push(date);
    //     }
    //     dayCounter++;
    //     date = new Date(this.year, this.month, dayCounter);
    //     dateMonth = date.getMonth() + 1;
    //   }
    //   console.log(dates);
    // });

    // const dates = [];
    // let dayCounter = 0;
    // let date = new Date(this.year, this.month, dayCounter);
    // let dateMonth = date.getMonth() + 1;
    // console.log(dateMonth, this.month);
    // while (dateMonth == this.month) {
    //   dates.push(date);
    //   dayCounter++;
    //   date = new Date(this.year, this.month, dayCounter);
    //   dateMonth = date.getMonth() + 1;
    // }
    // console.log(dates);

  }

  private createDatesForEachWeekDay(){
    this.weekDayDates = [];
    for (let weekDayIndex = 0; weekDayIndex < this.DAYS_PER_WEEK; weekDayIndex++) {
      this.weekDayDates.push(new Date(this.date.getFullYear(), this.date.getMonth(), weekDayIndex))
    }
  }

  // findFirstMondayOfYearDay() {
  //   let dayIndex = 1;
  //   let dayName = this.getDayName(dayIndex);
  //   while (dayName != "Monday")
  //     dayName = this.getDayName(dayIndex++);
  //   return dayIndex;
  // }

  // getDayName(dayIndex: number) {
  //   const date = new Date(this.year, 0, dayIndex);
  //   const weekDay = date.toLocaleString("default", { weekday: 'long' });
  //   return weekDay;
  // }

}
