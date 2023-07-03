import { Component, Input, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Maybe } from 'graphql/jsutils/Maybe';
import { Subject, takeUntil } from 'rxjs';
import { Period } from 'src/app/core/typings/period';
import { EventEntity, ScheduleEntity } from 'src/schema/schema';
import { PortalEventDetailsActions } from '../../state/portal-event-details.actions';
import { selectScheduleStartDates, selectSchedules } from './../../state/portal-event-details.selectors';

@Component({
  selector: 'app-portal-event-calendar',
  templateUrl: './portal-event-calendar.component.html',
  styleUrls: ['./portal-event-calendar.component.scss']
})
export class PortalEventCalendarComponent implements OnDestroy{
  
  @Input()
  public event?: Maybe<EventEntity>;
  
  @Input()
  public label = 'date';
  
  public startDates = this.store.select(selectScheduleStartDates);

  public schedules = this.store.select(selectSchedules);

  public selectedSchedule?: ScheduleEntity;

  private destroy = new Subject<void>();
  
  constructor(private store: Store) { }
  
  monthSelected($event: Period) {
    this.selectedSchedule = undefined;
    this.store.dispatch(PortalEventDetailsActions
      .getSchedules($event.startDate.toISOString(),
       $event.endDate.toISOString()));
  }

  daySelected($event: Period) {
    this.schedules
      .pipe(takeUntil(this.destroy))
      .subscribe(dates => {
        this.selectedSchedule = dates
          ?.filter(date => (new Date(date.startDate) >= $event.startDate)
             && (new Date(date.startDate) <= $event.endDate))[0];
      });
  }

  clearData() {
    this.selectedSchedule = undefined;
  }

  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}
