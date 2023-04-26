import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { eventsFeatureKey } from 'src/app/core/constants/core.constants';
import { DisplayType } from 'src/app/core/typings/overview-display';
import { RadioInput } from 'src/app/shared/form/typings/radio-input';
import { displayQueryParam } from '../../constants/portal-event-overview.constant';
import { PortalEventOverviewActions } from '../../state/portal-event-overview.actions';
import { selectSponsoredEvent } from '../../state/portal-event-overview.selectors';

@Component({
  selector: 'app-portal-event-filter-area',
  templateUrl: './portal-event-filter-area.component.html',
  styleUrls: ['./portal-event-filter-area.component.scss']
})
export class PortalEventFilterAreaComponent implements OnDestroy {

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
    this.store.dispatch(PortalEventOverviewActions.getSponsoredEvent());

    this.activatedRoute.queryParams
      .pipe(takeUntil(this.destroy))
      .subscribe(queryParams => {
        this.value = queryParams[this.displayQueryParam] || DisplayType.Category;
        this.store.dispatch(PortalEventOverviewActions.overviewDisplayChanged(this.value));
      });
  }

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }

}