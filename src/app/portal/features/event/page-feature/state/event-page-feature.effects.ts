import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs';
import { EventEntity, GetEventsGQL } from 'src/schema/schema';
import { EventPageFeatureActions } from './event-page-feature.actions';

@Injectable()
export class EventPageFeatureEffects {

  getReventEvents = createEffect(() => this.actions.pipe(
    ofType(EventPageFeatureActions.getRecentEvents),
    switchMap(() => this.getEventsService.watch({
      params: {
        sort: 'modified',
        dir: 'desc',
        size: 10,
      }
     }).valueChanges),
    map(response => EventPageFeatureActions.setRecentEvents(response.data.getEvents?.result as EventEntity[]))
  ));

  constructor(
    private actions: Actions,
    private getEventsService: GetEventsGQL,
  ) {}
}
