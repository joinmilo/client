import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Period } from 'src/app/shared/calendar/typings/month';
import { CalendarPageFeatureActions } from '../state/calendar-page-feature.actions';
import { selectDistinctSchedules, selectSelectedEvents } from '../state/calendar-page-feature.selectors';

@Component({
  selector: 'app-calendar-page-feature',
  templateUrl: './calendar-page-feature.component.html',
  styleUrls: ['./calendar-page-feature.component.scss']
})
export class CalendarPageFeatureComponent {
  
  public events = this.store.select(selectSelectedEvents);

  public startDates = this.store.select(selectDistinctSchedules);

  constructor(
    private store: Store,
  ) {}

  public daySelected(day: Period) {
    this.store.dispatch(CalendarPageFeatureActions.daySelected(day));
  }

  public monthSelected(month: Period) {
    this.store.dispatch(CalendarPageFeatureActions.monthSelected(month));
  }

}
