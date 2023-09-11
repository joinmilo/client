import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { EMPTY, debounceTime, map, switchMap, take, withLatestFrom } from 'rxjs';
import { AdminActions } from 'src/app/admin/state/admin.actions';
import { AnalyticsDto } from 'src/app/core/api/generated/schema';
import { slug } from 'src/app/core/constants/queryparam.constants';
import { GetEventDetailsSearchStatisticsGQL } from 'src/app/features/event/api/generated/get-event-details-search-statistics.query.generated';
import { EventAdminDetailsSearchActions } from './event-admin-details-search.actions';
import { selectSlug } from './event-admin-details-search.selectors';

@Injectable()
export class EventAdminDetailsSearchEffects {

  ngrxOnInitEffects(): Action {
    return EventAdminDetailsSearchActions.init();
  }

  init = createEffect(() => this.actions.pipe(
    ofType(EventAdminDetailsSearchActions.init),
    switchMap(() => this.activatedRoute.parent?.params ?? EMPTY),
    debounceTime(0), //TODO: race condition activated route and ngrxOnInitEffects
    take(1),
    map(params => EventAdminDetailsSearchActions.setSlug(params[slug] || ''))
  ));

  updateParams = createEffect(() => this.actions.pipe(
    ofType(EventAdminDetailsSearchActions.updateParams),
    withLatestFrom(this.store.select(selectSlug)),
    switchMap(([action, slug]) => this.getSearchStatisticsService.watch({
      entity: { slug },
      startDate: action.period.startDate,
      endDate: action.period.endDate,
    }).valueChanges),
    map(response => response.data.getEvent?.id
      ? EventAdminDetailsSearchActions.setSearchStatistics(response.data.getEvent.searchStatistics as AnalyticsDto[])
      : AdminActions.notFound())
  ));

  constructor(
    private actions: Actions,
    private activatedRoute: ActivatedRoute,
    private store: Store,
    private getSearchStatisticsService: GetEventDetailsSearchStatisticsGQL,
  ) {}
}
