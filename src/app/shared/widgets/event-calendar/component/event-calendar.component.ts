import { Component, EventEmitter, Input, OnChanges, OnDestroy, Output, SimpleChanges } from '@angular/core';
import { Store } from '@ngrx/store';
import { Period } from 'ngx-cinlib/core';
import { Subject, takeUntil } from 'rxjs';
import { EventEntity, Maybe } from 'src/app/core/api/generated/schema';
import { EventFilterQueryParams } from 'src/app/core/typings/filter-params/event-filter-param';
import { EventCalendarActions } from '../state/event-calendar.actions';
import { selectDistinctSchedules, selectSelectedEvents } from '../state/event-calendar.selectors';

@Component({
  selector: 'app-event-calendar',
  templateUrl: './event-calendar.component.html',
  styleUrls: ['./event-calendar.component.scss'],
})
export class EventCalendarComponent implements OnChanges, OnDestroy {

  @Input()
  public additionalFilter?: Maybe<EventFilterQueryParams>

  @Input()
  public queryParams = true;

  @Output()
  public daySelected = new EventEmitter<Period>();

  @Output()
  public events = new EventEmitter<Maybe<EventEntity>[] | undefined>();

  public startDates = this.store.select(selectDistinctSchedules);

  private destroy = new Subject<void>();

  constructor(
    private store: Store,
  ) {
    this.store.select(selectSelectedEvents)
      .pipe(takeUntil(this.destroy))
      .subscribe(events => this.events.emit(events));
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes && changes['additionalFilter'] && this.additionalFilter) {
      this.store.dispatch(EventCalendarActions.filterUpdated(this.additionalFilter));
    }
  }

  public daySelectionUpdate(day: Period) {
    this.daySelected.emit(day);
    this.store.dispatch(EventCalendarActions.daySelected(day));
  }

  public monthSelectionUpdate(month: Period) {
    this.store.dispatch(EventCalendarActions.monthSelected(month));
  }

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}