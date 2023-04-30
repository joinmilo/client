import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs';
import { PortalMenuActions } from 'src/app/portal/shared/menu/state/portal-menu.actions';
import { EventEntity, GetEventGQL, GetEventsGQL } from 'src/schema/schema';
import { PortalEventDetailsActions } from './portal-event-details.actions';

@Injectable()
export class PortalEventDetailsEffects {

  getEventDetails = createEffect(() => this.actions.pipe(
    ofType(PortalEventDetailsActions.getEventDetails),
    switchMap((action) => this.getEvent.watch({ 
      entity: {
        id: action.slug
      }
    }).valueChanges),
    map(response => response.data.getEvent?.id
      ? PortalEventDetailsActions.setEventDetails(response.data.getEvent as EventEntity)
      : PortalMenuActions.notFound())
  ));

  getSponsoredEvent = createEffect(() => this.actions.pipe(
    ofType(PortalEventDetailsActions.getSponsoredEvent),
    switchMap(() => this.getEvent.watch({ 
      entity: {
        sponsored: true
      }
    }).valueChanges),
    map(response => PortalEventDetailsActions.setSponsoredEvent(response.data.getEvent as EventEntity))
  ));

  setParams = createEffect(() => this.actions.pipe(
    ofType(PortalEventDetailsActions.setParams),
    switchMap(action => this.getEvents.watch({ 
      params: action.params,
    }).valueChanges),
    map(response => PortalEventDetailsActions.setOverviewData(response.data.getEvents?.result as EventEntity[]))
  ));

  constructor(
    private actions: Actions,
    private getEvent: GetEventGQL,
    private getEvents: GetEventsGQL,
  ) {}
}