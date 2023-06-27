import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map, switchMap, withLatestFrom } from 'rxjs';
import { FilterKey } from 'src/app/core/typings/filter-params/map-filter-param';
import {
  DealEntity,
  EventEntity,
  GetDealsGQL,
  GetEventsGQL,
  GetMapFilterOptionsGQL,
  GetOrganisationsGQL,
  OrganisationEntity,
} from 'src/schema/schema';
import { dealsToPois, eventsToPois, organisationsToPois } from '../utils/point-of-interest.util';
import { MapFeatureActions } from './map.actions';
import { selectActiveFilter } from './map.selector';

@Injectable()
export class MapEffects {

  setFilterParams = createEffect(() => this.actions.pipe(
    ofType(MapFeatureActions.setFilterParams),
    withLatestFrom(this.store.select(selectActiveFilter)),
    map(([action, filter]) => {
      switch (filter) {
        case FilterKey.deals:
          return MapFeatureActions.getDeals({params: action.params});
        case FilterKey.events:
          return MapFeatureActions.getEvents({params: action.params});
        case FilterKey.organisations:
          return MapFeatureActions.getOrganisations({params: action.params});
      }
    })
  ));

  getEvents = createEffect(() => this.actions.pipe(
    ofType(MapFeatureActions.getEvents),
    switchMap((action) => this.getEventsService.watch({params: action.params}).valueChanges),
    map((response) => MapFeatureActions.setEvents({
      events: response.data.getEvents?.result as EventEntity[]
    }))
  ));

  getOrganisations = createEffect(() => this.actions.pipe(
    ofType(MapFeatureActions.getOrganisations),
    switchMap((action) => this.getOrganisationsService.watch({params: action.params}).valueChanges),
    map((response) => MapFeatureActions.setOrganisations({
      organisations: response.data.getOrganisations?.result as OrganisationEntity[]
    }))
  ));

  getDeals = createEffect(() => this.actions.pipe(
    ofType(MapFeatureActions.getDeals),
    switchMap((action) => this.getDealsService.watch({params: action.params}).valueChanges),
    map((response) => MapFeatureActions.setDeals({
      deals: response.data.getDeals?.result as DealEntity[]
    }))
  ))

  setResultsFromDeals = createEffect(() => this.actions.pipe(
    ofType(MapFeatureActions.setDeals),
    map(({deals}) => MapFeatureActions.setResults({
      count: deals.length,
      label: 'deal',
      labelPlural: 'deals',
      entity: 'DealEntity',
      data: deals
    }))
  ))

  setResultsFromEvents = createEffect(() => this.actions.pipe(
    ofType(MapFeatureActions.setEvents),
    map(({events}) => MapFeatureActions.setResults({
      count: events.length,
      label: 'event',
      labelPlural: 'events',
      entity: 'EventEntity',
      data: events,
    })),
  ));

  setResultsFromOrganisations = createEffect(() => this.actions.pipe(
    ofType(MapFeatureActions.setOrganisations),
    map(({organisations}) => MapFeatureActions.setResults({
      count: organisations.length,
      label: 'organisation',
      labelPlural: 'organisations',
      entity: 'OrganisationEntity',
      data: organisations,
    }))
  ));

  setPoisFromDeals = createEffect(() => this.actions.pipe(
    ofType(MapFeatureActions.setDeals),
    map(({deals}) => MapFeatureActions.setPois({pois: dealsToPois(deals)}))
  ));

  setPoisFromEvents = createEffect(() => this.actions.pipe(
    ofType(MapFeatureActions.setEvents),
    map(({events}) => MapFeatureActions.setPois({pois: eventsToPois(events)}))
  ));

  setPoisFromOrganisations = createEffect(() => this.actions.pipe(
    ofType(MapFeatureActions.setOrganisations),
    map(({organisations}) => MapFeatureActions.setPois({pois: organisationsToPois(organisations)}))
  ));

  constructor(
    private actions: Actions,
    private getMapFilterOptions: GetMapFilterOptionsGQL,
    private getDealsService: GetDealsGQL,
    private getEventsService: GetEventsGQL,
    private getOrganisationsService: GetOrganisationsGQL,
    private store: Store
  ) {}
}

