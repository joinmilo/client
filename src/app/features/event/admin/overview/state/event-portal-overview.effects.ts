import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map, switchMap, withLatestFrom } from 'rxjs';
import { GetEventsGQL, PageableList_EventEntity } from 'src/schema/schema';
import { EventAdminOverviewActions } from './event-admin-overview.actions';
import { selectParams } from './event-portal-overview.selectors';

@Injectable()
export class EventAdminOverviewEffects {

  updateParams = createEffect(() => this.actions.pipe(
    ofType(EventAdminOverviewActions.updateParams),
    withLatestFrom(this.store.select(selectParams)),
    switchMap(([, params]) => this.getEvents.watch({
      params,
    }).valueChanges),
    map(response => EventAdminOverviewActions.setOverviewData(response.data.getEvents as PageableList_EventEntity))
  ));

  constructor(
    private actions: Actions,
    private getEvents: GetEventsGQL,
    private store: Store,
  ) {}
}
