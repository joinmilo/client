import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs';
import { EventEntity, QueryOperator } from 'src/app/core/api/generated/schema';
import { GetEventCardsGQL } from 'src/app/shared/widgets/card/api/generated/get-event-cards.query.generated';
import { EventEmbeddingActions } from './event-embedding.actions';

@Injectable()
export class EventEmbeddingEffects {

  getRecentEvents = createEffect(() => this.actions.pipe(
    ofType(EventEmbeddingActions.getRecentEvents),
    switchMap(() => this.getEventCardsService.watch({
      params: {
        sort: 'modified',
        dir: 'desc',
        size: 10,

        expression: {
          entity: {
            path: 'schedules.startDate',
            operator: QueryOperator.GreaterThan,
            value: new Date().toISOString(),
          }
        }
      }
     }).valueChanges),
    map(response => EventEmbeddingActions.setRecentEvents(response.data.getEvents?.result as EventEntity[]))
  ));

  constructor(
    private actions: Actions,
    private getEventCardsService: GetEventCardsGQL,
  ) {}
}
