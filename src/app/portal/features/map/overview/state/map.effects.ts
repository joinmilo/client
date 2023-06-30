import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { filter, map, switchMap, withLatestFrom } from 'rxjs';
import { MapEntityFilter } from 'src/app/core/typings/filter-params/map-filter-param';
import {
  DealEntity,
  EventEntity,
  GetDealsGQL,
  GetEventsGQL,
  GetOrganisationsGQL,
  OrganisationEntity
} from 'src/schema/schema';
import { MapFeatureActions } from './map.actions';
import { selectActiveEntityFilter } from './map.selector';

@Injectable()
export class MapEffects {

  getEvents = createEffect(() => this.actions.pipe(
    ofType(MapFeatureActions.setFilterParams),
    withLatestFrom(this.store.select(selectActiveEntityFilter)),
    filter(([, activePoi]) => !activePoi || activePoi === MapEntityFilter.Events),
    switchMap(([action]) => this.getEventsService.watch({params: action.params}).valueChanges),
    map((response) => MapFeatureActions.setEvents({
      events: response.data.getEvents?.result as EventEntity[]
    }))
  ));

  getOrganisations = createEffect(() => this.actions.pipe(
    ofType(MapFeatureActions.setFilterParams),
    withLatestFrom(this.store.select(selectActiveEntityFilter)),
    filter(([, activePoi]) => !activePoi || activePoi === MapEntityFilter.Organisations),
    switchMap(([action]) => this.getOrganisationsService.watch({params: action.params}).valueChanges),
    map((response) => MapFeatureActions.setOrganisations({
      organisations: response.data.getOrganisations?.result as OrganisationEntity[]
    }))
  ));

  getDeals = createEffect(() => this.actions.pipe(
    ofType(MapFeatureActions.setFilterParams),
    withLatestFrom(this.store.select(selectActiveEntityFilter)),
    filter(([, activePoi]) => !activePoi || activePoi === MapEntityFilter.Deals),
    switchMap(([action]) => this.getDealsService.watch({params: action.params}).valueChanges),
    map((response) => MapFeatureActions.setDeals({
      deals: response.data.getDeals?.result as DealEntity[]
    }))
  ));

  constructor(
    private actions: Actions,
    private getDealsService: GetDealsGQL,
    private getEventsService: GetEventsGQL,
    private getOrganisationsService: GetOrganisationsGQL,
    private store: Store
  ) {}
}

