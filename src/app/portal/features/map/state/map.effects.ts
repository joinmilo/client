import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {MapFeatureActions} from './map.actions';
import {map, switchMap} from 'rxjs';
import {
  ConjunctionOperator,
  DealCategoryEntity,
  EventCategoryEntity,
  EventEntity,
  EventTargetGroupEntity,
  GetEventsGQL,
  GetMapFilterOptionsGQL,
  SuburbEntity
} from 'src/schema/schema';
import {QueryExpressionService} from '../../../../core/services/query-expression.service';
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
  ))

  filterEvents = createEffect(() => this.actions.pipe(
    ofType(MapFeatureActions.setEventFilter),
    map((action) => {
      console.log("in filterEvents");
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
  ))

  getEvents = createEffect(() => this.actions.pipe(
    ofType(MapFeatureActions.getEvents),
    tap(() => console.log("in getEvents")),
    switchMap((action) => this.getEventsService.watch({params: action.params}).valueChanges),
    map((response) => MapFeatureActions.setEvents({
      events: response.data.getEvents?.result as EventEntity[]
    }))
  ))

  constructor(
    private actions: Actions,
    private getMapFilterOptions: GetMapFilterOptionsGQL,
    private getEventsService: GetEventsGQL,
    private queryExpressionService: QueryExpressionService
  ) {}
}

