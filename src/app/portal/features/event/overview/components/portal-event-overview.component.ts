import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { displayQueryParam } from 'src/app/core/constants/core.constants';
import { EventFilterQueryParams } from 'src/app/core/typings/filter-params/event-filter-param';
import { OverviewDisplayType } from 'src/app/core/typings/filter-params/overview-display';
import { RadioInput } from 'src/app/shared/form/typings/radio-input';
import { FilterSortPaginateInput } from 'src/schema/schema';
import { PortalEventOverviewActions } from '../state/portal-event-overview.actions';
import { selectOverviewData, selectSponsoredEvent } from '../state/portal-event-overview.selectors';

@Component({
  selector: 'app-portal-event-overview',
  templateUrl: './portal-event-overview.component.html',
  styleUrls: ['./portal-event-overview.component.scss']
})
export class PortalEventOverviewComponent {

  public displayType = OverviewDisplayType.Category;

  public displayQueryParam = displayQueryParam;

  public inputs: RadioInput[] = [
    {
      icon: ['fas', 'shapes'],
      label: 'category',
      value: OverviewDisplayType.Category
    },
    {
      icon: ['fas', 'calendar'],
      label: 'calendar',
      value: OverviewDisplayType.Calendar
    },
    {
      icon: ['fas', 'map-location-dot'],
      label: 'mapview',
      value: OverviewDisplayType.Map
    },
    {
      icon: ['fas', 'list'],
      label: 'table',
      value: OverviewDisplayType.Table
    },
  ];

  public events = this.store.select(selectOverviewData);

  public sponsored = this.store.select(selectSponsoredEvent);
  
  constructor(
    private store: Store,
  ) {
    this.store.dispatch(PortalEventOverviewActions.getSponsoredEvent());
  }

  public updateParams(params: FilterSortPaginateInput) {
    this.store.dispatch(PortalEventOverviewActions.updateParams(params));
  }

  public updateRawParams(params: EventFilterQueryParams) {
    this.store.dispatch(PortalEventOverviewActions.updateRawParams(params));
  }

}