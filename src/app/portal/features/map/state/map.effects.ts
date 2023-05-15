import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {MapFeatureActions} from './map.actions';
import {map, switchMap, withLatestFrom} from 'rxjs';
import {
  ConjunctionOperator,
  DealCategoryEntity,
  EventCategoryEntity,
  EventEntity,
  EventTargetGroupEntity,
  GetEventsGQL,
  GetMapFilterOptionsGQL, GetOrganisationsGQL, OrganisationEntity,
  QueryOperator,
  SuburbEntity
} from 'src/schema/schema';
import {QueryExpressionService} from 'src/app/core/services/query-expression.service';
import {Store} from '@ngrx/store';
import {selectEventFilter, selectMapFilters} from './map.selector';
import {FilterKey} from '../constants/map.constants';
import {dealsToPois, eventsToPois, organisationsToPois} from '../utils/point-of-interest.util';

@Injectable()
export class MapEffects {

  getFilterOptions = createEffect(() => this.actions.pipe(
    ofType(MapFeatureActions.getFilterOptions),
    switchMap(() => this.getMapFilterOptions.watch().valueChanges),
    map((response) => MapFeatureActions.setFilterOptions({
      dealCategories: response.data.getDealCategories?.result as DealCategoryEntity[],
      eventCategories: response.data.getEventCategories?.result as EventCategoryEntity[],
      targetGroups: response.data.getEventTargetGroups?.result as EventTargetGroupEntity[],
      suburbs: response.data.getSuburbs?.result as SuburbEntity[]
    }))
  ));

  filterEvents = createEffect(() => this.actions.pipe(
    ofType(MapFeatureActions.setEventFilter),
    map((action) => {
      return {
        params: {
          expression: this.queryExpressionService.builder()
            .addIfNotNull('category.id', action.categoryId)
            .addIfNotNull('targetGroup.id', action.targetGroupId)
            .build(ConjunctionOperator.And)
        }
      }
    }),
    map((filter) => MapFeatureActions.getEvents(filter))
  ));

  getEvents = createEffect(() => this.actions.pipe(
    ofType(MapFeatureActions.getEvents),
    switchMap((action) => this.getEventsService.watch({params: action.params}).valueChanges),
    map((response) => MapFeatureActions.setEvents({
      events: response.data.getEvents?.result as EventEntity[]
    }))
  ));

  filterOrganisations = createEffect(() => this.actions.pipe(
    ofType(MapFeatureActions.setOrganisationFilter),
    map((action) => {
      return {
        params: {
          expression: this.queryExpressionService.builder()
            .addIfNotNull('address.suburb.id', action.suburbId)
            // Todo: Real score filter needs average on backend
            .addIfNotNull('rating.score', action?.rating?.toString(), QueryOperator.GreaterThan)
            .build(ConjunctionOperator.And)
        }
      }
    }),
    map((filter) => MapFeatureActions.getOrganisations(filter))
  ));

  getOrganisations = createEffect(() => this.actions.pipe(
    ofType(MapFeatureActions.getOrganisations),
    switchMap((action) => this.getOrganisationsService.watch({params: action.params}).valueChanges),
    map((response) => MapFeatureActions.setOrganisations({
      organisations: response.data.getOrganisations?.result as OrganisationEntity[]
    }))
  ));

  setActiveFilter = createEffect(() => this.actions.pipe(
    ofType(MapFeatureActions.setActiveFilter),
    withLatestFrom(this.store.select(selectMapFilters)),
    map(([action, filters]) => {
      switch (action.key) {
        case FilterKey.events:
          return MapFeatureActions.setEventFilter(filters.eventFilter || {});
        case FilterKey.organisations:
          return MapFeatureActions.setOrganisationFilter(filters.organisationFilter || {});
        case FilterKey.deals:
          return MapFeatureActions.setDealFilter(filters.dealFilter || {});
      }
    })
  ));

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
    private getEventsService: GetEventsGQL,
    private getOrganisationsService: GetOrganisationsGQL,
    private queryExpressionService: QueryExpressionService,
    private store: Store
  ) {}
}

