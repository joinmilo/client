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
import {selectMapFilters} from './map.selector';
import {FilterKey} from '../constants/map.constants';

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
            .maybeAdd("category.id", action.categoryId)
            .maybeAdd("targetGroup.id", action.targetGroupId)
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
            .maybeAdd("address.suburb.id", action.suburbId)
            // Todo: Real score filter needs average on backend
            .maybeAdd("rating.score", action?.rating?.toString(), QueryOperator.GreaterThan)
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

  constructor(
    private actions: Actions,
    private getMapFilterOptions: GetMapFilterOptionsGQL,
    private getEventsService: GetEventsGQL,
    private getOrganisationsService: GetOrganisationsGQL,
    private queryExpressionService: QueryExpressionService,
    private store: Store
  ) {}
}

