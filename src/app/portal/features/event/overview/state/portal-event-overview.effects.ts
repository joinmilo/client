import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs';
import { EventEntity, GetEventGQL, GetEventsGQL, PageableList_EventEntity } from 'src/schema/schema';
import { PortalEventOverviewActions } from './portal-event-overview.actions';

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
    ofType(PortalEventOverviewActions.paramsUpdated),
    switchMap(action => this.getEvents.watch({ 
      params: action.params,
    }).valueChanges),
    map(response => PortalEventOverviewActions.setOverviewData(response.data.getEvents as PageableList_EventEntity))
  ));

  constructor(
    private actions: Actions,
    private getEvent: GetEventGQL,
    private getEvents: GetEventsGQL,
  ) {}
}
