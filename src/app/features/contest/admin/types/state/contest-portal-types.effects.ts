import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { EMPTY, map, of, switchMap, withLatestFrom } from 'rxjs';
import { PageableList_ContestTypeEntity } from 'src/app/core/api/generated/schema';
import { CoreActions } from 'src/app/core/state/actions/core.actions';
import { FeedbackType } from 'src/app/core/typings/feedback';
import { ConfirmService } from 'src/app/shared/confirm/service/confirm.service';
import { ConfirmType } from 'src/app/shared/confirm/typings/confirm';
import { GetContestTypesGQL } from 'src/app/shared/filter/contest/api/generated/get-contest-types.query.generated';
import { DeleteContestTypeGQL } from '../../../api/generated/delete-report-type.mutation.generated';
import { ContestAdminTypesActions } from './contest-admin-types.actions';
import { selectParams } from './contest-portal-types.selectors';

@Injectable()
export class ContestAdminTypesEffects {

  updateParams = createEffect(() => this.actions.pipe(
    ofType(
      ContestAdminTypesActions.updateParams,
      ContestAdminTypesActions.typeDeleted,
    ),
    withLatestFrom(this.store.select(selectParams)),
    switchMap(([, params]) => this.getContestTypesService.watch({ 
      params,
    }).valueChanges),
    map(response => ContestAdminTypesActions.setTypesData(response.data.getContestTypes as PageableList_ContestTypeEntity))
  ));

  deleteContestType = createEffect(() => this.actions.pipe(
    ofType(ContestAdminTypesActions.deleteType),
    switchMap(action => this.confirmDialogService
      .confirm({ type: ConfirmType.Delete, context: action.contestType?.name }).pipe(
        switchMap(confirmed => confirmed
          ? of(action.contestType)
          : EMPTY
        )
      )
    ),
    switchMap(contestType => this.deleteContestService.mutate({
      id: contestType?.id
    })),
    map(() => ContestAdminTypesActions.typeDeleted())
  ));

  contestDeleted = createEffect(() => this.actions.pipe(
    ofType(ContestAdminTypesActions.typeDeleted),
    map(() => CoreActions.setFeedback({
      type: FeedbackType.Success,
      labelMessage: 'deletedSuccessfully'
    }))
  ));

  constructor(
    private actions: Actions,
    private confirmDialogService: ConfirmService,
    private deleteContestService: DeleteContestTypeGQL,
    private getContestTypesService: GetContestTypesGQL,
    private store: Store,
  ) {}
}
