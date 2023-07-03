import { Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { MatCalendar } from '@angular/material/datepicker';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subject, takeUntil } from 'rxjs';
import { Period } from 'src/app/core/typings/period';
import { dayPeriod, monthPeriod } from 'src/app/core/utils/date.utils';
import { Maybe } from 'src/schema/schema';
import { CalendarService } from '../../services/calendar.service';
import { CalendarQueryDefinition, CalendarQueryParams } from '../../typings/calendar';
import { CalendarHeaderComponent } from '../header/calendar-header.component';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  providers: [CalendarService]
})
export class CalendarComponent implements OnInit, OnDestroy {
  
  @Input()
  public dates?: Observable<Maybe<Date[]> | undefined>;

  @Input()
  public queryParams = true;
  
  @Input()
  public startAt = new Date();

  @Output()
  public daySelected = new EventEmitter<Period>();

  @Output()
  public monthSelected = new EventEmitter<Period>();

  @ViewChild(MatCalendar)
  private calendar?: MatCalendar<Date>;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public dateFilter = (_: Date): boolean => { return false; }

  public header = CalendarHeaderComponent;
  
  private destroy = new Subject<void>();
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private calendarService: CalendarService,
    private router: Router,
  ) { }

  public ngOnInit(): void {
    this.watchQueryParams();
    this.watchMonthSelection();
    this.watchDateFilter();
  }

  private watchQueryParams(): void {
    if (this.queryParams) {
      this.activatedRoute.queryParams
        .pipe(takeUntil(this.destroy))
        .subscribe((params: CalendarQueryParams) => {
          if (params[CalendarQueryDefinition.selectedMonth]) {
            this.startAt = new Date(params[CalendarQueryDefinition.selectedMonth]);
            
            if (this.calendar) {
              this.calendar.activeDate = new Date(params[CalendarQueryDefinition.selectedMonth]);
              this.calendar?.updateTodaysDate();
            }

            this.monthSelected.emit(monthPeriod(this.startAt) as Period);
          }

          if (params[CalendarQueryDefinition.selectedDay]) {
            this.daySelected.emit(dayPeriod(new Date(params[CalendarQueryDefinition.selectedDay])) as Period);
          }
        });
    }
  }

  private watchMonthSelection(): void {
    this.monthSelected.emit(monthPeriod(this.startAt) as Period);
    this.calendarService.selectedMonth()
      .pipe(takeUntil(this.destroy))
      .subscribe(month => {
        this.monthSelected.emit(month);
        if (this.queryParams) {
          this.router.navigate([], {
            
            queryParams: {
              [CalendarQueryDefinition.selectedMonth]: month.startDate.toISOString(),
            },
            queryParamsHandling: 'merge'
          });
        }
      });
  }

  private watchDateFilter(): void {
    // This overrrides the dateFilter to refresh date filter async
    // see: https://stackoverflow.com/questions/59762201/how-to-have-material-calenders-date-picker-filter-method-work-with-observables
    this.dates?.pipe(takeUntil(this.destroy))
      .subscribe(dates => this.dateFilter = (calendarDate: Date) =>
        !!dates?.some(date => date.toDateString() === calendarDate.toDateString()))
  }
  public selectedChange(date: Maybe<Date>): void {
    this.daySelected.emit(dayPeriod(date) as Period);

    if (this.queryParams) {
      this.router.navigate([], {
        
        queryParams: {
          [CalendarQueryDefinition.selectedDay]: date?.toISOString(),
        },
        queryParamsHandling: 'merge'
      });
    }
  }
  
  public ngOnDestroy(): void {
    this.router.navigate([], {
      
      queryParams: {
        [CalendarQueryDefinition.selectedDay]: null,
        [CalendarQueryDefinition.selectedMonth]: null,
      },
      queryParamsHandling: 'merge'
    });

    this.destroy.next();  
    this.destroy.complete();
  }

}