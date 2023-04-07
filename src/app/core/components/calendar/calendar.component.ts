import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Maybe } from 'graphql/jsutils/Maybe';
import { Observable, Subject, takeUntil } from 'rxjs';
import { CalendarService } from '../../services/calendar.service';
import { Month } from '../../typings/month';
import { dateToMonth } from '../../utils/date.utils';
import { CalendarHeaderComponent } from './calendar-header/calendar-header.component';

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
  public dates?: Observable<Maybe<Date[]>>;
 
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public dateFilter = (_: Date): boolean => { return false; }

  public startAt = new Date();

  @Output()
  public selectedDate = new EventEmitter<Date>();

  @Output()
  public selectedMonth = new EventEmitter<Month>();
  
  constructor(
    private calendarService: CalendarService,
  ) { }

  public ngOnInit(): void {

    this.selectedMonth.emit(dateToMonth(this.startAt));
    this.calendarService.selectedMonth()
      .pipe(takeUntil(this.destroy))
      .subscribe(month => this.selectedMonth.emit(month));

    // This overrrides the dateFilter to refresh date filter async
    // see: https://stackoverflow.com/questions/59762201/how-to-have-material-calenders-date-picker-filter-method-work-with-observables
    this.dates?.pipe(takeUntil(this.destroy))
      .subscribe(dates => this.dateFilter = (calendarDate: Date) =>
        !!dates?.some(date => date.toDateString() === calendarDate.toDateString()))
  }
  
  public ngOnDestroy(): void {
    this.destroy.next();  
    this.destroy.complete();
  }

}