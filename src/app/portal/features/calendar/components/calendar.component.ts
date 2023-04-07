import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { Month } from 'src/app/core/typings/month';
import { EventEntity, Maybe } from 'src/schema/schema';
import { CalendarActions } from '../state/calendar.actions';
import { selectDistinctSchedules } from '../state/calendar.selectors';


@Component({
  selector: 'app-portal-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class PortalCalendarComponent {

  @Input()
  public events?: Maybe<EventEntity[]>;

  public startDates = this.store.select(selectDistinctSchedules)
    .pipe(map(schedules => schedules?.map(schedule => schedule.startDate)))

  constructor(
    private store: Store,
  ) {}

  public monthChanged(month: Month) {
    this.store.dispatch(CalendarActions.monthChanged(month));
  }


}