import { Component, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Period } from 'src/app/shared/calendar/typings/month';
import { PortalCalendarActions } from '../state/portal-calendar.actions';
import { selectDistinctSchedules, selectSelectedEvents } from '../state/portal-calendar.selectors';


@Component({
  selector: 'app-portal-calendar',
  templateUrl: './portal-calendar.component.html',
  styleUrls: ['./portal-calendar.component.scss']
})
export class PortalCalendarComponent implements OnDestroy {

  public events = this.store.select(selectSelectedEvents);

  public startDates = this.store.select(selectDistinctSchedules);

  public title?: string;

  constructor(
    private store: Store,
  ) {}

  public daySelected(day: Period) {
    this.store.dispatch(PortalCalendarActions.daySelected(day));
    this.title = day.startDate.toLocaleDateString();
  }

  public monthSelected(month: Period) {
    this.store.dispatch(PortalCalendarActions.monthSelected(month));
  }

  public ngOnDestroy(): void {
    this.store.dispatch(PortalCalendarActions.setEvents([]));
  }

}