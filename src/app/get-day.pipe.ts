import { Pipe, PipeTransform } from '@angular/core';

export interface WeekDayTarget {
	name: string, // 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday',
	index: number, // 1, 2, 3, 4, 5, 6, 7
	nth: number, // 1 | 2 | 3 | 4 | 5,
	month: number, // 0 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11,
	year: number
}

@Pipe({
	name: 'getDay'
})
export class GetDayPipe implements PipeTransform {

	dayCounter: number = 1;
	matchCounter: number = 0;
	date: Date = new Date();

	/**
	 * Find the Date for the nth Weekday of the Month and return it as a local string
	 * @param { WeekDayTarget } weekDayTarget
	 * @returns { string } Date as default to local string
	 */
	transform(weekDayTarget: WeekDayTarget): string {
		this.date.setFullYear(weekDayTarget.year, weekDayTarget.month, this.dayCounter); // set month beginning
		const firstDayNumber = this.date.getDay();
		
		if(firstDayNumber > 1 && weekDayTarget.index < firstDayNumber){
			this.dayCounter -= firstDayNumber;
			this.date.setFullYear(weekDayTarget.year, weekDayTarget.month, this.dayCounter); // set month beginning
		}

		while (weekDayTarget.nth != this.matchCounter) { // while not reached the nth week day
			this.date.setFullYear(weekDayTarget.year, weekDayTarget.month, this.dayCounter++);
			if (this.isWeekDay(weekDayTarget.name)) { // found week day
				this.matchCounter++;
			}
		}
		return this.date.toLocaleString('default');
	}

	setDayCounter(weekDayTarget : WeekDayTarget){

	}

	isFirstWeek(weekNumber : number){
		return weekNumber == 1;
	}

	isMonthFirstDayMonday(weekDayTarget : WeekDayTarget){
		return new Date(weekDayTarget.year, weekDayTarget.month, 1).toLocaleString('default', {weekday : 'long'}) == 'Monday';
	}

	isWeekDay(weekDayName: string) {
		return this.date.toLocaleString('default', { weekday: 'long' }) == weekDayName;
	}

}
