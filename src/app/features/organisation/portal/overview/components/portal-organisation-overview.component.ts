import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { FilterSortPaginateInput } from 'src/app/core/api/generated/schema';
import { displayQueryParam } from 'src/app/core/constants/queryparam.constants';
import { OverviewDisplayType } from 'src/app/core/typings/filter-params/overview-display';
import { RadioButtonInput } from 'src/app/shared/form/radio-button/typings/radio-button-input';
import { PortalOrganisationOverviewActions } from '../state/portal-organisation-overview.actions';
import { selectOverviewData, selectSponsoredOrganisation } from '../state/portal-organisation-overview.selectors';

@Component({
  selector: 'app-portal-organisation-overview',
  templateUrl: './portal-organisation-overview.component.html',
  styleUrls: ['./portal-organisation-overview.component.scss']
})
export class PortalOrganisationOverviewComponent {

  public displayType = OverviewDisplayType.Card;

  public displayQueryParam = displayQueryParam;

  public inputs: RadioButtonInput[] = [
    {
      icon: ['fas', 'shapes'],
      label: 'list',
      value: OverviewDisplayType.Card
    },
    {
      icon: ['fas', 'map-location-dot'],
      label: 'mapview',
      value: OverviewDisplayType.Map
    },
    {
      icon: ['fas', 'tree-city'],
      label: 'suburbs',
      value: OverviewDisplayType.Suburb
    },
    {
      icon: ['fas', 'list'],
      label: 'table',
      value: OverviewDisplayType.Table
    },
  ];

  public organisations = this.store.select(selectOverviewData);

  public sponsored = this.store.select(selectSponsoredOrganisation);
  
  constructor(
    private store: Store,
  ) {
    this.store.dispatch(PortalOrganisationOverviewActions.getSponsoredOrganisation());
  }

  public updateParams(params: FilterSortPaginateInput) {
    this.store.dispatch(PortalOrganisationOverviewActions.updateParams(params));
  }

}