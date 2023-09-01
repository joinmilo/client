import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs';
import { AdminActions } from 'src/app/admin/state/admin.actions';
import { EventEntity } from 'src/app/core/api/generated/schema';
import { GetEventDetailsGQL } from 'src/app/features/event/api/generated/get-event-details.query.generated';
import { EventAdminDetailsLayoutActions } from './event-admin-details-layout.actions';

@Injectable()
export class EventAdminDetailsLayoutEffects {

  getDetails = createEffect(() => this.actions.pipe(
    ofType(EventAdminDetailsLayoutActions.getDetails),
    switchMap((action) => this.getEventService.watch({
      entity: {
        slug: action.slug
      }
    }).valueChanges),
    map(response => response.data.getEvent?.id
      ? EventAdminDetailsLayoutActions.setDetails(response.data.getEvent as EventEntity)
      : AdminActions.notFound())
  ));

  constructor(
    private actions: Actions,
    private getEventService: GetEventDetailsGQL,
  ) {}
}
