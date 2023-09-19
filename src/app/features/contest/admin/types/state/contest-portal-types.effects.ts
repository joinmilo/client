import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { EMPTY, map, of, switchMap, withLatestFrom } from 'rxjs';
import { PageableList_ContestTypeEntity } from 'src/app/core/api/generated/schema';
import { CoreActions } from 'src/app/core/state/actions/core.actions';
import { FeedbackType } from 'src/app/core/typings/feedback';
import { ConfirmDeleteComponent } from 'src/app/shared/dialogs/confirm-delete/confirm-delete.component';
import { DeleteContestTypeGQL } from '../../../api/generated/delete-report-type.mutation.generated';
import { GetContestTypesGQL } from '../../../api/generated/get-report-types.query.generated';
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

  deleteContest = createEffect(() => this.actions.pipe(
    ofType(ContestAdminTypesActions.deleteType),
    switchMap(action => this.dialog.open(ConfirmDeleteComponent, { data: action.contestType?.name })
      .afterClosed().pipe(
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
    private dialog: MatDialog,
    private deleteContestService: DeleteContestTypeGQL,
    private getContestTypesService: GetContestTypesGQL,
    private store: Store,
  ) {}
}
