import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map, switchMap, withLatestFrom } from 'rxjs';
import { ContestCommentEntity, ContestEntity } from 'src/app/core/api/generated/schema';
import { CoreUserActions } from 'src/app/core/state/actions/core-user.actions';
import { CoreActions } from 'src/app/core/state/actions/core.actions';
import { selectCurrentUser } from 'src/app/core/state/selectors/user.selectors';
import { FeedbackType } from 'src/app/core/typings/feedback';
import { PortalActions } from 'src/app/portal/state/portal.actions';
import { GetContestDetailsGQL } from '../../../../../api/generated/get-contest-details.query.generated';
import { SaveContestCommentGQL } from '../../../../../api/generated/save-contest-comment.mutation.generated';

import { ContestPortalDetailsLandingActions } from './portal-contest-details-landing.actions';
import { selectContestDetails } from './portal-contest-details-landing.selectors';

@Injectable()
export class ContestPortalDetailsLandingEffects {

  getDetails = createEffect(() => this.actions.pipe(
    ofType(ContestPortalDetailsLandingActions.getDetails),
    switchMap((action) => this.getContestService.watch({
      entity: {
        slug: action.slug
      }
    }).valueChanges),
    map(response => response.data.getContest?.id
      ? ContestPortalDetailsLandingActions.setDetails(response.data.getContest as ContestEntity)
      : PortalActions.notFound())
  ));

  updateDetails = createEffect(() => this.actions.pipe(
    ofType(
      ContestPortalDetailsLandingActions.contestCommentSaved,
    ),
    withLatestFrom(this.store.select(selectContestDetails)),
    switchMap(([, contestDetails]) => this.getContestService.watch({
      entity: {
        slug: contestDetails?.slug
      }
    }).valueChanges),
    map(response => response.data.getContest?.id
      ? ContestPortalDetailsLandingActions.detailsUpdated(response.data.getContest as ContestEntity)
      : PortalActions.notFound())
  ));

  detailsUpdated = createEffect(() => this.actions.pipe(
    ofType(ContestPortalDetailsLandingActions.detailsUpdated),
    map(() => CoreUserActions.updateUser())
  ));

  saveContestComment = createEffect(() => this.actions.pipe(
    ofType(ContestPortalDetailsLandingActions.saveContestComment),
    withLatestFrom(
      this.store.select(selectContestDetails),
      this.store.select(selectCurrentUser),
    ),
    map(([action, contest, user]) => (
      {
        ...action.entity,
        contest: { id: contest?.id },
        userContext: { id: user?.id }
      }
    )),
    switchMap(entity => this.saveContestCommentService.mutate({
      entity
    })),
    map(response => ContestPortalDetailsLandingActions.contestCommentSaved(response.data?.saveContestComment as ContestCommentEntity))
  ));

  contestCommentSaved = createEffect(() => this.actions.pipe(
    ofType(ContestPortalDetailsLandingActions.contestCommentSaved),
    map(() => CoreActions.setFeedback({
      type: FeedbackType.Success,
      labelMessage: 'commentSaved'
    }))
  ));
  
  constructor(
    private actions: Actions,
    private getContestService: GetContestDetailsGQL,
    private store: Store,
    private saveContestCommentService: SaveContestCommentGQL,

  ) { }
}
