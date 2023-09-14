import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs';
import { AdminActions } from 'src/app/admin/state/admin.actions';
import { EventEntity } from 'src/app/core/api/generated/schema';
import { GetEventDetailsVisitorGQL } from 'src/app/features/event/api/generated/get-event-details-visitors.query.generated';
import { EventAdminDetailsVisitorsActions } from './event-admin-details-visitors.actions';

@Injectable()
export class EventAdminDetailsVisitorsEffects {

  getDetails = createEffect(() => this.actions.pipe(
    ofType(EventAdminDetailsVisitorsActions.updateParams),
    switchMap((action) => this.getEventVisitorsService.watch({
      entity: {
        slug: action.slug,
      },
      startDate: action.period?.startDate,
      endDate: action.period?.endDate
    }).valueChanges),
    map(response => response.data.getEvent?.id
      ? EventAdminDetailsVisitorsActions.setDetails(response.data.getEvent as EventEntity)
      : AdminActions.notFound())
  ));

  constructor(
    private actions: Actions,
    private getEventVisitorsService: GetEventDetailsVisitorGQL,
  ) {}
}
