import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { FeedbackType } from 'ngx-cinlib/modals/feedback';
import { EMPTY, map, of, switchMap, withLatestFrom } from 'rxjs';
import { PageableList_ContestEntity } from 'src/app/core/api/generated/schema';
import { CoreActions } from 'src/app/core/state/actions/core.actions';
import { ConfirmService } from 'src/app/shared/confirm/service/confirm.service';
import { ConfirmType } from 'src/app/shared/confirm/typings/confirm';
import { DeleteContestGQL } from '../../../api/generated/delete-contest.mutation.generated';
import { GetContestsGQL } from '../../../api/generated/get-contests.query.generated';
import { SponsorContestGQL } from '../../../api/generated/sponsor-contest.mutation.generated';
import { ContestAdminOverviewActions } from './contest-admin-overview.actions';
import { selectParams } from './contest-portal-overview.selectors';

@Injectable()
export class ContestAdminOverviewEffects {

  updateParams = createEffect(() => this.actions.pipe(
    ofType(
      ContestAdminOverviewActions.updateParams,
      ContestAdminOverviewActions.contestDeleted,
      ContestAdminOverviewActions.contestSponsored
      ),
    withLatestFrom(this.store.select(selectParams)),
    switchMap(([, params]) => this.getContestService.watch({
      params,
    }).valueChanges),
    map(response => ContestAdminOverviewActions.setOverviewData(response.data.getContests as PageableList_ContestEntity))
  ));

  sponsorContest = createEffect(() => this.actions.pipe(
    ofType(ContestAdminOverviewActions.sponsorContest),
    switchMap(action => this.confirmService
      .confirm({ type: ConfirmType.Change, context: 'thisWillSponsor' }).pipe(
        switchMap(confirmed => confirmed
          ? of(action.contest)
          : EMPTY
        )
      )
    ),
    switchMap(contest => this.sponsorContestService.mutate({
      contestId: contest?.id,
    })),
    map(() => ContestAdminOverviewActions.contestSponsored())
  ));

  contestSponsored = createEffect(() => this.actions.pipe(
    ofType(ContestAdminOverviewActions.contestSponsored),
    map(() => CoreActions.setFeedback({
      type: FeedbackType.Success,
      labelMessage: 'changedSuccessfully'
    }))
  ));

  deleteContest = createEffect(() => this.actions.pipe(
    ofType(ContestAdminOverviewActions.deleteContest),
    switchMap(action => this.confirmService
      .confirm({ type: ConfirmType.Delete, context: action.contest?.name }).pipe(
        switchMap(confirmed => confirmed
          ? of(action.contest)
          : EMPTY
        )
      )
    ),
    switchMap(contest => this.deleteContestService.mutate({
      id: contest?.id
    })),
    map(() => ContestAdminOverviewActions.contestDeleted())
  ));

  contestDeleted = createEffect(() => this.actions.pipe(
    ofType(ContestAdminOverviewActions.contestDeleted),
    map(() => CoreActions.setFeedback({
      type: FeedbackType.Success,
      labelMessage: 'deletedSuccessfully'
    }))
  ));

  constructor(
    private actions: Actions,
    private deleteContestService: DeleteContestGQL,
    private getContestService: GetContestsGQL,
    private store: Store,
    private sponsorContestService: SponsorContestGQL,
    private confirmService: ConfirmService
  ) {}
}
