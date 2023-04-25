import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map, switchMap } from 'rxjs';
import { EventEntity, GetEventGQL, GetEventsGQL, PageableList_EventEntity } from 'src/schema/schema';
import { PortalEventOverviewActions } from './portal-event-overview.actions';
import { selectTableParams } from './portal-event-overview.selectors';

@Injectable()
export class PortalEventOverviewEffects {

  getSponsoredEvent = createEffect(() => this.actions.pipe(
    ofType(PortalEventOverviewActions.getSponsoredEvent),
    switchMap(() => this.getEvent.watch({ 
      entity: {
        sponsored: true
      }
    }).valueChanges),
    map(response => PortalEventOverviewActions.setSponsoredEvent(response.data.getEvent as EventEntity))
  ));

  setParams = createEffect(() => this.actions.pipe(
    ofType(PortalEventOverviewActions.setParams),
    switchMap(action => this.getEvents.watch({ 
      params: action.params,
    }).valueChanges),
    map(response => PortalEventOverviewActions.setOverviewData(response.data.getEvents?.result as EventEntity[]))
  ));

  setTableParams = createEffect(() => this.actions.pipe(
    ofType(
      PortalEventOverviewActions.setParams,
      PortalEventOverviewActions.setTableParams,
    ),
    concatLatestFrom(() => 
      this.store.select(selectTableParams)
    ),
    map(([action, params]) => Object.assign({...params} || {}, action.params)),
    switchMap(params => this.getEvents.watch({ 
      params,
    }).valueChanges),
    map(response => PortalEventOverviewActions.setTableData(response.data.getEvents as PageableList_EventEntity))
  ));

  constructor(
    private actions: Actions,
    private getEvent: GetEventGQL,
    private getEvents: GetEventsGQL,
    private store: Store,
  ) {}
}
