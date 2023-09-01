import { Component, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { EventEntity, EventScheduleEntity, Maybe } from 'src/app/core/api/generated/schema';
import { Period } from 'src/app/core/typings/period';
import { EventAdminDetailsLandingActions } from '../../state/event-admin-details-landing.actions';
import { selectEventAdminDetailsLanding, selectEventAdminDetailsLandingSchedules } from '../../state/event-admin-details-landing.selectors';

@Component({
  selector: 'app-event-admin-details-landing-calendar',
  templateUrl: './event-admin-details-landing-calendar.component.html',
  styleUrls: ['./event-admin-details-landing-calendar.component.scss']
})
export class EventAdminDetailsLandingCalendarComponent implements OnDestroy{

  public event?: Maybe<EventEntity>;
    
  public startDates?: Date[];

  public selectedSchedule?: EventScheduleEntity;

  private destroy = new Subject<void>();

  constructor(
    private store: Store
  ) {
    this.store.select(selectEventAdminDetailsLandingSchedules)
      .pipe(takeUntil(this.destroy))
      .subscribe(schedules =>
        this.startDates = schedules?.map(schedule => new Date(schedule.startDate))
      );

    this.store.select(selectEventAdminDetailsLanding)
      .pipe(takeUntil(this.destroy))
      .subscribe(event => this.event = event);
  }
  
  public monthSelected(period: Period) {
    this.store.dispatch(
      EventAdminDetailsLandingActions.getSchedules(
        this.event?.id,
        period.startDate.toISOString(),
        period.endDate.toISOString()
      )
    );
  }

  public daySelected(period: Period): void {
    this.store.select(selectEventAdminDetailsLandingSchedules)
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
