import { Component, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Period } from 'ngx-cinlib/core';
import { Subject, takeUntil } from 'rxjs';
import { EventEntity, EventScheduleEntity, Maybe } from 'src/app/core/api/generated/schema';
import { PortalEventDetailsActions } from '../../state/portal-event-details.actions';
import { selectEventDetails, selectSchedules } from '../../state/portal-event-details.selectors';

@Component({
  selector: 'app-portal-event-details-calendar',
  templateUrl: './portal-event-details-calendar.component.html',
  styleUrls: ['./portal-event-details-calendar.component.scss']
})
export class PortalEventDetailsCalendarComponent implements OnDestroy {

  public event?: Maybe<EventEntity>;

  public startDates?: Date[];

  public selectedSchedule?: EventScheduleEntity;

  private destroy = new Subject<void>();

  constructor(
    private store: Store
  ) {
    this.store.select(selectSchedules)
      .pipe(takeUntil(this.destroy))
      .subscribe(schedules =>
        this.startDates = schedules?.map(schedule => new Date(schedule.startDate))
      );

    this.store.select(selectEventDetails)
      .pipe(takeUntil(this.destroy))
      .subscribe(event => this.event = event);
  }

  public monthSelected(period: Period) {
    this.store.dispatch(
      PortalEventDetailsActions.getSchedules(
        this.event?.id,
        period.startDate.toISOString(),
        period.endDate.toISOString()
      )
    );
  }

  public daySelected(period: Period): void {
    this.store.select(selectSchedules)
      .pipe(takeUntil(this.destroy))
      .subscribe(dates =>
        this.selectedSchedule = dates
          ?.find(date => (new Date(date.startDate) >= period.startDate)
            && (new Date(date.startDate) <= period.endDate))
      );
  }

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}
