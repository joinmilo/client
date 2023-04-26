import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { collapse } from 'src/app/core/animations/animations';
import { eventsFeatureKey } from 'src/app/core/constants/core.constants';
import { DisplayType } from 'src/app/core/typings/overview-display';
import { RadioInput } from 'src/app/shared/form/typings/radio-input';
import { displayQueryParam } from '../../constants/portal-event-overview.constant';
import { PortalEventOverviewActions } from '../../state/portal-event-overview.actions';
import { selectSponsoredEvent } from '../../state/portal-event-overview.selectors';

@Component({
  selector: 'app-portal-event-filter-area',
  templateUrl: './portal-event-filter-area.component.html',
  styleUrls: ['./portal-event-filter-area.component.scss'],
  animations: [
     collapse()
  ],
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

  public filtersActive = false;

  public display?: DisplayType;

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
        this.display = queryParams[this.displayQueryParam] || DisplayType.Category;
        this.store.dispatch(PortalEventOverviewActions.displayChanged(this.display));
      });
  }


  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }

}