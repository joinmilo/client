import { Component, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { RadioButtonInput } from 'ngx-cinlib/forms/radio-button';
import { Subject, takeUntil } from 'rxjs';
import { FilterSortPaginateInput } from 'src/app/core/api/generated/schema';
import { displayQueryParam } from 'src/app/core/constants/queryparam.constants';
import { SchemaService } from 'src/app/core/services/schema.service';
import { OverviewDisplayType } from 'src/app/core/typings/filter-params/overview-display';
import { PortalOrganisationOverviewActions } from '../state/portal-organisation-overview.actions';
import { selectOverviewData, selectSponsoredOrganisation } from '../state/portal-organisation-overview.selectors';

@Component({
  selector: 'app-portal-organisation-overview',
  templateUrl: './portal-organisation-overview.component.html',
  styleUrls: ['./portal-organisation-overview.component.scss']
})
export class PortalOrganisationOverviewComponent implements OnDestroy  {

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
  
  private destroy = new Subject<void>();

  constructor(
    private schemaService: SchemaService,
    private store: Store,
  ) {
    this.store.dispatch(PortalOrganisationOverviewActions.getSponsoredOrganisation());

    this.organisations
      ?.pipe(takeUntil(this.destroy))
      ?.subscribe(organisations => this.schemaService.createArraySchema('OrganisationEntity', organisations?.result))
  }

  public updateParams(params: FilterSortPaginateInput) {
    this.store.dispatch(PortalOrganisationOverviewActions.updateParams(params));
  }

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }

}