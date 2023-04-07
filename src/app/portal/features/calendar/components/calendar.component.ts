import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Period } from 'src/app/core/typings/month';
import { CalendarActions } from '../state/calendar.actions';
import { selectDistinctSchedules, selectEventCards } from '../state/calendar.selectors';


@Component({
  selector: 'app-portal-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class PortalCalendarComponent {

  public cards = this.store.select(selectEventCards);

  public startDates = this.store.select(selectDistinctSchedules);

  constructor(
    private store: Store,
  ) {}

  public daySelected(day: Period) {
    this.store.dispatch(CalendarActions.daySelected(day));
  }

  public monthSelected(month: Period) {
    this.store.dispatch(CalendarActions.monthSelected(month));
  }


}