import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {MapFeatureActions} from './map.actions';
import {map, switchMap, withLatestFrom} from 'rxjs';
import {
  ConjunctionOperator,
  DealCategoryEntity,
  DealEntity,
  EventCategoryEntity,
  EventEntity,
  EventTargetGroupEntity,
  GetDealsGQL,
  GetEventsGQL,
  GetMapFilterOptionsGQL,
  GetOrganisationsGQL,
  OrganisationEntity,
  QueryOperator,
  SuburbEntity
} from 'src/schema/schema';
import {QueryExpressionService} from 'src/app/core/services/query-expression.service';
import {Store} from '@ngrx/store';
import {selectMapFilters} from './map.selector';
import {DealOfferStatus, FilterKey} from '../constants/map.constants';
import {dealsToPois, eventsToPois, organisationsToPois} from '../utils/point-of-interest.util';
import {MapRouteService} from '../service/map-route-service';
import {tap} from 'rxjs/operators';

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
      const builder = this.queryExpressionService.builder();
      if (!action.showPastEvents) {
        builder.add("schedules.endDate", new Date().toISOString(), QueryOperator.GreaterOrEqual);
      }
      if (action.showOnlyAdmissionFree) {
        builder.add("entryFee", null);
      }
      return {
        params: {
          expression: builder
            .addIfNotEmpty('category.id', action.categoryId)
            .addIfNotEmpty('targetGroups.id', action.targetGroupId)
            .addIfNotEmpty('address.suburb.id', action.suburbId)
            .addIfNotEmpty("schedules.startDate", action.dateRange?.start, QueryOperator.GreaterOrEqual)
            .addIfNotEmpty("schedules.endDate", action.dateRange?.end, QueryOperator.LessOrEqual)
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
            .addIfNotEmpty('address.suburb.id', action.suburbId)
            // TODO: Comparison with int does not work (probably needs average on backend anyway)
            .addIfNotEmpty('ratings.score', action?.rating?.toString(), QueryOperator.GreaterThan)
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

  filterDeals = createEffect(() => this.actions.pipe(
    ofType(MapFeatureActions.setDealFilter),
    map((action) => {
      const builder = this.queryExpressionService.builder();
      if (action.offerStatus != DealOfferStatus.both) {
        builder.add('offer', String(action.offerStatus == DealOfferStatus.offer))
      }
      return {
        params: {
          expression: builder
            .addIfNotEmpty('address.suburb.id', action.suburbId)
            .addIfNotEmpty('category.id', action.categoryId)
            .build(ConjunctionOperator.And)
        }
      }
    }),
    map((filter) => MapFeatureActions.getDeals(filter))
  ))

  getDeals = createEffect(() => this.actions.pipe(
    ofType(MapFeatureActions.getDeals),
    switchMap((action) => this.getDealsService.watch({params: action.params}).valueChanges),
    map((response) => MapFeatureActions.setDeals({
      deals: response.data.getDeals?.result as DealEntity[]
    }))
  ))

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

  setDealFilterRouteParams = createEffect(() => this.actions.pipe(
    ofType(MapFeatureActions.setDealFilter),
    tap((dealFilter) => this.mapRouteService.setDealFilterParams(dealFilter))
  ), {dispatch: false});

  setEventFilterRouteParams = createEffect(() => this.actions.pipe(
    ofType(MapFeatureActions.setEventFilter),
    tap((eventFilter) => this.mapRouteService.setEventFilterParams(eventFilter))
  ), {dispatch: false});

  setOrganisationFilterRouteParams = createEffect(() => this.actions.pipe(
    ofType(MapFeatureActions.setOrganisationFilter),
    tap((organisationFilter) => this.mapRouteService.setOrganisationFilterParams(organisationFilter))
  ), {dispatch: false});

  constructor(
    private actions: Actions,
    private getMapFilterOptions: GetMapFilterOptionsGQL,
    private getDealsService: GetDealsGQL,
    private getEventsService: GetEventsGQL,
    private getOrganisationsService: GetOrganisationsGQL,
    private mapRouteService: MapRouteService,
    private queryExpressionService: QueryExpressionService,
    private store: Store
  ) {}
}

