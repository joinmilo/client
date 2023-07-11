import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs';
import { DealEntity, EventEntity, GetDealGQL, GetEventGQL, GetOrganisationGQL, OrganisationEntity } from 'src/schema/schema';
import { MapPageFeatureActions } from './map-page-feature.actions';

@Injectable()
export class MapPageFeatureEffects {

  getSponsoredDeal = createEffect(() => this.actions.pipe(
    ofType(MapPageFeatureActions.getSponsoredDeal),
    switchMap(() => this.getDeal.watch({
      entity: {
        sponsored: true
      }
    }).valueChanges),
    map((response) => MapPageFeatureActions.setSponsoredDeal(
      response.data.getDeal as DealEntity
    ))
  ));

  getSponsoredEvent = createEffect(() => this.actions.pipe(
    ofType(MapPageFeatureActions.getSponsoredEvent),
    switchMap(() => this.getEvent.watch({
      entity: {
        sponsored: true
      }
    }).valueChanges),
    map((response) => MapPageFeatureActions.setSponsoredEvent(
      response.data.getEvent as EventEntity
    ))
  ));

  getSponsoredOrganisation = createEffect(() => this.actions.pipe(
    ofType(MapPageFeatureActions.getSponsoredOrganisation),
    switchMap(() => this.getOrganisation.watch({
      entity: {
        sponsored: true
      }
    }).valueChanges),
    map((response) => MapPageFeatureActions.setSponsoredOrganisation(
      response.data.getOrganisation as OrganisationEntity
    ))
  ));  
  
  constructor(
    private actions: Actions,
    private getEvent: GetEventGQL,
    private getDeal: GetDealGQL,
    private getOrganisation: GetOrganisationGQL,
  ) {}
}
