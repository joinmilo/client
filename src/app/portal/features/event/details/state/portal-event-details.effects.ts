import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs';
import { PortalMenuActions } from 'src/app/portal/shared/menu/state/portal-menu.actions';
import { EventEntity, GetEventGQL } from 'src/schema/schema';
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

  constructor(
    private actions: Actions,
    private getEvent: GetEventGQL,
  ) {}
}
