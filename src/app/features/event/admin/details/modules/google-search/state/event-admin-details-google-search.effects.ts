import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs';
import { AdminActions } from 'src/app/admin/state/admin.actions';
import { EventEntity } from 'src/app/core/api/generated/schema';
import { GetEventDetailsGoogleSearchGQL } from 'src/app/features/event/api/generated/get-event-details-goole-search.query.generated';
import { EventAdminDetailsGoogleSearchActions } from './event-admin-details-google-search.actions';

@Injectable()
export class EventAdminDetailsGoogleSearchEffects {

  getDetails = createEffect(() => this.actions.pipe(
    ofType(EventAdminDetailsGoogleSearchActions.getDetails),
    switchMap((action) => this.getEventService.watch({
      entity: {
        slug: action.slug
      }
    }).valueChanges),
    map(response => response.data.getEvent?.id
      ? EventAdminDetailsGoogleSearchActions.setDetails(response.data.getEvent as EventEntity)
      : AdminActions.notFound())
  ));

  constructor(
    private actions: Actions,
    private getEventService: GetEventDetailsGoogleSearchGQL,
  ) {}
}
