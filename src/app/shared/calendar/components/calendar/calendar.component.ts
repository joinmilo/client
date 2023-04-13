import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Observable, Subject, takeUntil } from 'rxjs';
import { dayPeriod, monthPeriod } from 'src/app/core/utils/date.utils';
import { Maybe } from 'src/schema/schema';
import { CalendarService } from '../../services/calendar.service';
import { Period } from '../../typings/month';
import { CalendarHeaderComponent } from '../header/calendar-header.component';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  providers: [CalendarService]
})
export class CalendarComponent implements OnInit, OnDestroy {

  public header = CalendarHeaderComponent;

  private destroy = new Subject<void>();

  //Make Observable out of it
  @Input()
  public dates?: Observable<Maybe<Date[]> | undefined>;
 
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public dateFilter = (_: Date): boolean => { return false; }

  public startAt = new Date();

  @Output()
  public daySelected = new EventEmitter<Period>();

  @Output()
  public monthSelected = new EventEmitter<Period>();
  
  constructor(
    private calendarService: CalendarService,
  ) { }

  public ngOnInit(): void {

    this.monthSelected.emit(monthPeriod(this.startAt) as Period);
    this.calendarService.selectedMonth()
      .pipe(takeUntil(this.destroy))
      .subscribe(month => this.monthSelected.emit(month));

    // This overrrides the dateFilter to refresh date filter async
    // see: https://stackoverflow.com/questions/59762201/how-to-have-material-calenders-date-picker-filter-method-work-with-observables
    this.dates?.pipe(takeUntil(this.destroy))
      .subscribe(dates => this.dateFilter = (calendarDate: Date) =>
        !!dates?.some(date => date.toDateString() === calendarDate.toDateString()))
  }

  public selectedChange(date: Maybe<Date>): void {
    this.daySelected.emit(dayPeriod(date) as Period);
  }
  
  public ngOnDestroy(): void {
    this.destroy.next();  
    this.destroy.complete();
  }

}