import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'calendar';
  date = new Date(2022, 0, 1);

  // year = 2022;
  // startDate : any;
  // readonly FIRST_MONDAY_OF_YEAR_DAY = this.findFirstMondayOfYearDay();

  // constructor(){}

  // findFirstMondayOfYearDay(){
  //   let dayIndex = 1;
  //   let dayName = this.getDayName(dayIndex);
  //   while(dayName != "Monday")
  //     dayName = this.getDayName(dayIndex++);
  //   return dayIndex;
  // }

  // getDayName(dayIndex:number){
  //   const date = new Date(this.year, 0, dayIndex);
  //   const weekDay = date.toLocaleString("default", {weekday : 'long'});
  //   return weekDay;
  // }

  // months = [
  //   "January", "February", "March", "April", "May", "June", "Julie", "August", "September", "October", "November", "December"
  // ];

  // weekDays = [
  //   "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
  // ];

  // weekRows = [1, 2, 3, 4, 5];
}
