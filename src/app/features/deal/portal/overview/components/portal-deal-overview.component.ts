import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { FilterSortPaginateInput } from 'src/app/core/api/generated/schema';
import { dealsFeatureKey } from 'src/app/core/constants/feature.constants';
import { displayQueryParam } from 'src/app/core/constants/queryparam.constants';
import { OverviewDisplayType } from 'src/app/core/typings/filter-params/overview-display';
import { RadioButtonInput } from 'src/app/shared/form/radio-button/typings/radio-button-input';
import { PortalDealOverviewActions } from '../state/portal-deal-overview.actions';
import { selectOverviewData, selectSponsoredDeal } from '../state/portal-deal-overview.selectors';

@Component({
  selector: 'app-portal-deal-overview',
  templateUrl: './portal-deal-overview.component.html',
  styleUrls: ['./portal-deal-overview.component.scss']
})
export class PortalDealOverviewComponent {

  public displayType = OverviewDisplayType.Category;

  public displayQueryParam = displayQueryParam;

  public inputs: RadioButtonInput[] = [
    {
      icon: ['fas', 'shapes'],
      label: 'category',
      value: OverviewDisplayType.Category
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

  public deals = this.store.select(selectOverviewData);

  public sponsored = this.store.select(selectSponsoredDeal);

  public dealsFeatureKey = dealsFeatureKey;
  
  constructor(
    private store: Store,
  ) {
    this.store.dispatch(PortalDealOverviewActions.getSponsoredDeal());
  }

  public updateParams(params: FilterSortPaginateInput) {
    this.store.dispatch(PortalDealOverviewActions.updateParams(params));
  }
}