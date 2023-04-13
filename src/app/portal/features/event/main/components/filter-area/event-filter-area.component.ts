import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { DisplayType } from 'src/app/core/typings/display-type';
import { eventsFeatureKey } from 'src/app/portal/common/constants/common.constants';
import { RadioInput } from 'src/app/shared/form/typings/radio-input';
import { displayQueryParam } from '../../constants/event.constant';
import { EventActions } from '../../state/event.actions';
import { selectSponsoredEvent } from '../../state/event.selectors';

@Component({
  selector: 'app-event-filter-area',
  templateUrl: './event-filter-area.component.html',
  styleUrls: ['./event-filter-area.component.scss']
})
export class EventFilterAreaComponent implements OnDestroy {

  public sponsored = this.store.select(selectSponsoredEvent);

  public inputs: RadioInput[] = [
    {
      icon: ['fas', 'shapes'],
      label: 'category',
      value: DisplayType.Category
    },
    {
      icon: ['fas', 'calendar'],
      label: 'calendar',
      value: DisplayType.Calendar
    },
    {
      icon: ['fas', 'map-location-dot'],
      label: 'mapview',
      value: DisplayType.Map
    },
    {
      icon: ['fas', 'list'],
      label: 'list',
      value: DisplayType.List
    },
  ];

  public value?: DisplayType;

  public eventsFeatureKey = eventsFeatureKey;
  public displayQueryParam = displayQueryParam;

  private destroy = new Subject<void>();
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store, 
  ) {
    this.store.dispatch(EventActions.getSponsoredEvent());

    this.activatedRoute.queryParams
      .pipe(takeUntil(this.destroy))
      .subscribe(queryParams => {
        this.value = queryParams[this.displayQueryParam] || DisplayType.Category;
        this.store.dispatch(EventActions.overviewDisplayChanged(this.value));
      });
  }

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }

}