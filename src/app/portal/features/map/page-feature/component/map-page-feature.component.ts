import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Maybe } from 'graphql/jsutils/Maybe';
import { combineLatest } from 'rxjs';
import { MarkerDefinition } from 'src/app/shared/map/typings/map';
import { DealEntity, EventEntity, OrganisationEntity } from 'src/schema/schema';
import { MapPageFeatureActions } from '../state/map-page-feature.actions';
import { selectSponsoredDeal, selectSponsoredEvent, selectSponsoredOrganisation } from '../state/map-page-feature.selectors';

@Component({
  selector: 'app-map-page-feature',
  templateUrl: './map-page-feature.component.html',
  styleUrls: ['./map-page-feature.component.scss']
})
export class MapPageFeatureComponent implements OnInit{
  
  public deal?: Maybe<DealEntity>;

  public event?: Maybe<EventEntity>;

  public organisation?: Maybe<OrganisationEntity>;

  public marker?: Maybe<MarkerDefinition[]>;

  constructor(
    private store: Store, 
  ) { }

  public ngOnInit(): void {

  this.store.dispatch(MapPageFeatureActions.getSponsoredDeal());
  this.store.dispatch(MapPageFeatureActions.getSponsoredEvent());
  this.store.dispatch(MapPageFeatureActions.getSponsoredOrganisation());

  combineLatest([
    this.store.select(selectSponsoredEvent),
    this.store.select(selectSponsoredOrganisation),
    this.store.select(selectSponsoredDeal)
    ]).subscribe(([event, organisation, deal]) => {
      this.event = event;
      this.organisation = organisation;
      this.deal = deal;

      this.marker = [
      {
        entity: 'EventEntity',
        data: [event]
      },
      {
        entity: 'DealEntity',
        data: [deal]
      },
      {
        entity: 'OrganisationEntity',
        data: [organisation]
      }]
   })
  }
}
