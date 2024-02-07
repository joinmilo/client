import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { EMPTY, map, of, switchMap, withLatestFrom } from 'rxjs';
import {
  PageableList_ContestParticipationEntity,
  QueryOperator,
} from 'src/app/core/api/generated/schema';
import { CoreActions } from 'src/app/core/state/actions/core.actions';
import { FeedbackType } from 'src/app/core/typings/feedback';
import { DeleteContestParticipationGQL } from 'src/app/features/contest/api/generated/delete-contest-particiation.mutation.generated';
import { GetContestParticipationsGQL } from 'src/app/features/contest/api/generated/get-contest-participations.query.generated';
import { SaveContestParticipationGQL } from 'src/app/features/contest/api/generated/save-contest-participation.mutation.generated';
import { ConfirmService } from 'src/app/shared/confirm/service/confirm.service';
import { ConfirmType } from 'src/app/shared/confirm/typings/confirm';
import { ContestAdminDetailsParticipationActions } from './contest-admin-details-participation.actions';
import {
  selectParams,
  selectSlug,
} from './contest-admin-details-participation.selectors';

@Injectable()
export class ContestAdminDetailsParticipationEffects {
  updateParams = createEffect(() =>
    this.actions.pipe(
      ofType(
        ContestAdminDetailsParticipationActions.updateParams,
        ContestAdminDetailsParticipationActions.participationDeleted,
        ContestAdminDetailsParticipationActions.placementChanged,
        ContestAdminDetailsParticipationActions.approvedChanged
      ),
      withLatestFrom(
        this.store.select(selectSlug),
        this.store.select(selectParams)
      ),
      switchMap(
        ([, slug, params]) =>
          this.getContestParticipationsService.watch({
            params: {
              ...params,
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
        ContestAdminDetailsParticipationActions.setParticipations(
          response.data
            .getContestParticipations as PageableList_ContestParticipationEntity
        )
      )
    )
  );

  deleteParticipation = createEffect(() =>
    this.actions.pipe(
      ofType(ContestAdminDetailsParticipationActions.deleteParticipation),
      switchMap((action) =>
        this.confirmService
          .confirm({
            type: ConfirmType.Delete,
            context: action.participation?.userContext?.user?.email,
          })
          .pipe(
            switchMap((confirmed) =>
              confirmed ? of(action.participation) : EMPTY
            )
          )
      ),
      switchMap((Contest) =>
        this.deleteContestParticipationService.mutate({
          id: Contest?.id,
        })
      ),
      map(() => ContestAdminDetailsParticipationActions.participationDeleted())
    )
  );

  ParticipationDeleted = createEffect(() =>
    this.actions.pipe(
      ofType(ContestAdminDetailsParticipationActions.participationDeleted),
      map(() =>
        CoreActions.setFeedback({
          type: FeedbackType.Success,
          labelMessage: 'deletedSuccessfully',
        })
      )
    )
  );

  changePlacement = createEffect(() =>
    this.actions.pipe(
      ofType(ContestAdminDetailsParticipationActions.changePlacement),
      switchMap((action) => {
        const entityInput = {
          id: action.participation?.id,
          placement: action.participation?.placement || null,
        };
        return this.saveContestParticipationService.mutate({
          entity: entityInput,
        });
      }),
      map(() => ContestAdminDetailsParticipationActions.placementChanged())
    )
  );

  changeApproved = createEffect(() =>
    this.actions.pipe(
      ofType(ContestAdminDetailsParticipationActions.changeApproved),
      switchMap((action) => {
        const entityInput = {
          id: action.participation?.id,
          approved: !action.participation?.approved,
        };
        return this.saveContestParticipationService.mutate({
          entity: entityInput,
        });
      }),
      map(() => ContestAdminDetailsParticipationActions.approvedChanged())
    )
  );

  constructor(
    private actions: Actions,
    private confirmService: ConfirmService,
    private getContestParticipationsService: GetContestParticipationsGQL,
    private store: Store,
    private deleteContestParticipationService: DeleteContestParticipationGQL,
    private saveContestParticipationService: SaveContestParticipationGQL
  ) {}
}
