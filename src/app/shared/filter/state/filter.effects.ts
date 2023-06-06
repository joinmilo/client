import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap, take } from 'rxjs';
import { EventCategoryEntity, EventTargetGroupEntity, GetEventCategoriesGQL, GetEventTargetGroupsGQL } from 'src/schema/schema';
import { OverviewFilterQueryParams } from '../typings/query-param';
import { FilterActions } from './filter.actions';

@Injectable()
export class FilterEffects {

  init = createEffect(() => this.actions.pipe(
    ofType(FilterActions.init),
    switchMap(() => this.activatedRoute.queryParams),
    take(1),
    map((params: OverviewFilterQueryParams) => FilterActions.initialized(params))
  ));

  getEventCategories = createEffect(() => this.actions.pipe(
    ofType(FilterActions.getEventCategories),
    switchMap(() => this.getEventCategoriesService.watch().valueChanges),
    map(response => FilterActions.setEventCategories(response.data.getEventCategories?.result as EventCategoryEntity[]))
  ));

  getTargetGroups = createEffect(() => this.actions.pipe(
    ofType(FilterActions.getTargetGroups),
    switchMap(() => this.getTargetGroupsService.watch().valueChanges),
    map(response => FilterActions.setTargetGroups(response.data.getEventTargetGroups?.result as EventTargetGroupEntity[]))
  ));

  constructor(
    private actions: Actions,
    private activatedRoute: ActivatedRoute,
    private getEventCategoriesService: GetEventCategoriesGQL,
    private getTargetGroupsService: GetEventTargetGroupsGQL,
  ) {}
}
