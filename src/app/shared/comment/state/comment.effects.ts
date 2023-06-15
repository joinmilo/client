import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs';
import { CoreActions } from 'src/app/core/state/core.actions';
import { FeedbackType } from 'src/app/core/typings/feedback';
import { EventCommentEntity, SaveEventCommentGQL } from 'src/schema/schema';
import { CommentActions } from './comment.actions';

@Injectable()
export class CommentEffects {

  saveEventComment = createEffect(() => this.actions.pipe(
    ofType(CommentActions.saveEventComment),
    switchMap((action) => this.saveEventCommentService.mutate({
      entity: action.entity
    })),
    map(response => CommentActions.eventCommentSaved(response.data?.saveEventComment as EventCommentEntity))
  ));

  eventCommentSaved = createEffect(() => this.actions.pipe(
    ofType(CommentActions.eventCommentSaved),
    map(() => CoreActions.setFeedback({
      type: FeedbackType.Success,
      labelMessage: 'commentSaved'
    }))
  ));

  constructor(
    private actions: Actions,
    private saveEventCommentService: SaveEventCommentGQL,
  ) {}
}
