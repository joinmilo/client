import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Inject,
  OnDestroy,
} from '@angular/core';
import { DateAdapter, MAT_DATE_FORMATS, MatDateFormats } from '@angular/material/core';
import { MatCalendar } from '@angular/material/datepicker';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CalendarService } from 'src/app/core/services/calendar.service';

@Component({
  selector: 'app-calendar-header',
  styleUrls: ['calendar-header.component.scss'],
  templateUrl: 'calendar-header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalendarHeaderComponent implements OnDestroy {

  private destroy = new Subject<void>();

  constructor(
    private calendar: MatCalendar<Date>,
    private calendarService: CalendarService,
    private dateAdapter: DateAdapter<Date>,
    @Inject(MAT_DATE_FORMATS) private _dateFormats: MatDateFormats,
    cdr: ChangeDetectorRef,
  ) {
    calendar.stateChanges.pipe(takeUntil(this.destroy)).subscribe(() => cdr.markForCheck());
  }

  //TODO: apply translations
  get periodLabel() {
    return this.dateAdapter
      .format(this.calendar.activeDate, this._dateFormats.display.monthYearLabel)
      .toLocaleUpperCase();
  }

  public previous(): void {
    this.calendar.activeDate = this.dateAdapter
      .addCalendarMonths(this.calendar.activeDate, -1);
    this.calendarService.select(this.calendar.activeDate);
  }

  public next(): void {
    this.calendar.activeDate = this.dateAdapter
      .addCalendarMonths(this.calendar.activeDate, 1);
    this.calendarService.select(this.calendar.activeDate);
  }

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}