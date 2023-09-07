import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Actions } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { DeleteEventGQL } from '../../../api/generated/delete-event.mutation.generated';
import { GetEventsGQL } from '../../../api/generated/get-articles.query.generated';
import { SponsorEventGQL } from '../../../api/generated/sponsor-event.mutation.generated';

@Injectable()
export class EventAdminFormEffects {
  
  constructor(
    private actions: Actions,
    private dialog: MatDialog,
    private getEventsService: GetEventsGQL,
    private sponsorEventService: SponsorEventGQL,
    private deleteEventService: DeleteEventGQL,
    private store: Store,
  ) {}
}
