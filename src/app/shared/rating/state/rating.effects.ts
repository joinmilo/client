import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs';
import { CoreActions } from 'src/app/core/state/core.actions';
import { FeedbackType } from 'src/app/core/typings/feedback';
import { EventRatingEntity, SaveEventRatingGQL } from 'src/schema/schema';
import { RatingActions } from './rating.actions';

@Injectable()
export class RatingEffects {

  saveEventRating = createEffect(() => this.actions.pipe(
    ofType(RatingActions.saveEventRating),
    switchMap((action) => this.saveEventRatingService.mutate({
      entity: action.entity
    })),
    map(response => RatingActions.eventRatingSaved(response.data?.saveEventRating as EventRatingEntity))
  ));

  eventRatingSaved = createEffect(() => this.actions.pipe(
    ofType(RatingActions.eventRatingSaved),
    map(() => CoreActions.setFeedback({
      type: FeedbackType.Success,
      labelMessage: 'ratingSaved'
    }))
  ));

  constructor(
    private actions: Actions,
    private saveEventRatingService: SaveEventRatingGQL,
  ) {}
}
