import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { ConfirmService } from 'ngx-cinlib/modals/confirm';
import { FeedbackType } from 'ngx-cinlib/modals/feedback';
import { EMPTY, map, of, switchMap, withLatestFrom } from 'rxjs';
import {
  ContestVoteEntity,
  PageableList_ContestParticipationEntity,
  QueryOperator,
} from 'src/app/core/api/generated/schema';
import { CoreUserActions } from 'src/app/core/state/actions/core-user.actions';
import { CoreActions } from 'src/app/core/state/actions/core.actions';
import { GetContestParticipationsGQL } from 'src/app/features/contest/api/generated/get-contest-participations.query.generated';
import { SaveContestVoteGQL } from 'src/app/features/contest/api/generated/save-contest-vote.mutation.generated';
import { ContestPortalDetailsVoteActions } from './contest-portal-details-vote.actions';
import { selectContestMaxVotes, selectParams, selectSlug, selectUserVotes } from './contest-portal-details-vote.selectors';

@Injectable()
export class ContestPortalDetailsVoteEffects {
    
  getContestParticipations = createEffect(() =>
    this.actions.pipe(
      ofType(ContestPortalDetailsVoteActions.getParticipations),
      withLatestFrom(this.store.select(selectParams)),
      switchMap(([action, params]) => {
        return this.getContestParticipationsService.watch({
          params: {
            sort: params?.sort,
            dir: params?.dir,
            size: params?.size,
            page: params?.page,
            expression: {
              entity: {
                path: 'contest.slug',
                operator: QueryOperator.Equal,
                value: action.slug ,
              },
            },
          },
        }).valueChanges;
      }),
      map((response) =>
        ContestPortalDetailsVoteActions.setParticipations(
          response.data
            .getContestParticipations as PageableList_ContestParticipationEntity
        )
      )
    )
  );
  
  
  updateParams = createEffect(() =>
    this.actions.pipe(
      ofType(
        ContestPortalDetailsVoteActions.updateParams,
        ContestPortalDetailsVoteActions.voteSaved
      ),
      withLatestFrom(
        this.store.select(selectSlug),
        this.store.select(selectParams)),
      switchMap(([, slug, params]) => this.getContestParticipationsService.watch({
          params: {
            sort: params?.sort,
            dir: params?.dir,
            size: params?.size,
            page: params?.page,
            expression: {
              entity: {
                path: 'contest.slug',
                operator: QueryOperator.Equal,
                value: slug,
              },
            },
          },
        }).valueChanges
      ),
      map((response) =>
        ContestPortalDetailsVoteActions.setParticipations(
          response.data
            .getContestParticipations as PageableList_ContestParticipationEntity
        )
      )
    )
  );

  saveVote = createEffect(() =>
    this.actions.pipe(
      ofType(ContestPortalDetailsVoteActions.saveVote),
      withLatestFrom(this.store.select(selectContestMaxVotes),
      this.store.select(selectUserVotes)),
      switchMap(([action, maxVotes, userVotes]) =>
        this.confirmDialogService
          .confirm({
            buttonColor: 'primary',
            buttonLabel: 'confirm',
            titleLabel: 'confirmVote',
            messageLabel: 'areYouSureToVote',
            context: (maxVotes != null && maxVotes != undefined && maxVotes - userVotes <= 1) 
              ? 'lastVote'
              : 'moreVotes'
          })
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
        ContestPortalDetailsVoteActions.voteSaved(
          response.data?.saveContestVote as ContestVoteEntity
        )
      )
    )
  );

  voteSaved = createEffect(() =>
    this.actions.pipe(
      ofType(ContestPortalDetailsVoteActions.voteSaved),
      map(() =>
        CoreActions.setFeedback({
          type: FeedbackType.Success,
          labelMessage: 'voteSaved',
        })
      )
    )
  );

  updateUser = createEffect(() => this.actions.pipe(
    ofType(ContestPortalDetailsVoteActions.voteSaved),
    map(() => CoreUserActions.updateUser())
  ));  

  constructor(
    private actions: Actions,
    private confirmDialogService: ConfirmService,
    private getContestParticipationsService: GetContestParticipationsGQL,
    private saveContestVoteService: SaveContestVoteGQL,
    private store: Store
  ) {}
}
