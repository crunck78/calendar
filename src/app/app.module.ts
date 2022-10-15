import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetDayPipe } from './get-day.pipe';
import { CalendarComponent } from './calendar/calendar.component';
import { MonthComponent } from './month/month.component';
import { WeekComponent } from './week/week.component';
import { WeekDaysComponent } from './week-days/week-days.component';
import { WeekRowComponent } from './week-row/week-row.component';
import { WeekColumnComponent } from './week-column/week-column.component';
import { DayComponent } from './day/day.component';
import { NoteBlockComponent } from './note-block/note-block.component';

@NgModule({
  declarations: [
    AppComponent,
    GetDayPipe,
    CalendarComponent,
    MonthComponent,
    WeekComponent,
    WeekDaysComponent,
    WeekRowComponent,
    WeekColumnComponent,
    DayComponent,
    NoteBlockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
