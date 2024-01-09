import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { EMPTY, map, of, switchMap, withLatestFrom } from 'rxjs';
import {
  ContestVoteEntity,
  PageableList_ContestParticipationEntity,
} from 'src/app/core/api/generated/schema';
import { CoreActions } from 'src/app/core/state/actions/core.actions';
import { FeedbackType } from 'src/app/core/typings/feedback';
import { GetContestParticipationsGQL } from 'src/app/features/contest/api/generated/get-contest-participations.query.generated';
import { SaveContestVoteGQL } from 'src/app/features/contest/api/generated/save-contest-vote.mutation.generated';
import { ConfirmChangeComponent } from 'src/app/shared/dialogs/confirm-change/confirm-change.component';
import { ContestPortalDetailsParticipationsActions } from './contest-portal-details-participations.actions';
import { selectParams } from './contest-portal-details-participations.selectors';

@Injectable()
export class ContestPortalDetailsParticipationsEffects {
  getContestParticipations = createEffect(() =>
    this.actions.pipe(
      ofType(
        ContestPortalDetailsParticipationsActions.updateParams,
        ContestPortalDetailsParticipationsActions.voteSaved
      ),
      withLatestFrom(this.store.select(selectParams)),
      switchMap(
        ([, params]) =>
          this.getContestParticipationsService.watch({
            params,
          }).valueChanges
      ),
      map((response) =>
        ContestPortalDetailsParticipationsActions.setParticipations(
          response.data
            .getContestParticipations as PageableList_ContestParticipationEntity
        )
      )
    )
  );

  saveVote = createEffect(() =>
    this.actions.pipe(
      ofType(ContestPortalDetailsParticipationsActions.saveVote),
      switchMap((action) =>
        this.dialog
          .open(ConfirmChangeComponent, { data: 'do it allready' })
          .afterClosed()
          .pipe(
            switchMap((confirmed) => (confirmed ? of(action.entity) : EMPTY))
          )
      ),
      switchMap((vote) =>
        this.saveContestVoteService.mutate({
          entity: vote,
        })
      ),
      map((response) =>
        ContestPortalDetailsParticipationsActions.voteSaved(
          response.data?.saveContestVote as ContestVoteEntity
        )
      )
    )
  );

  voteSaved = createEffect(() =>
    this.actions.pipe(
      ofType(ContestPortalDetailsParticipationsActions.voteSaved),
      map(() =>
        CoreActions.setFeedback({
          type: FeedbackType.Success,
          labelMessage: 'voteSaved',
        })
      )
    )
  );

  constructor(
    private actions: Actions,
    private getContestParticipationsService: GetContestParticipationsGQL,
    private saveContestVoteService: SaveContestVoteGQL,
    private store: Store,
    private dialog: MatDialog
  ) {}
}
