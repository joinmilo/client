import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { EMPTY, map, of, switchMap, withLatestFrom } from 'rxjs';
import { PageableList_ReportTypeEntity } from 'src/app/core/api/generated/schema';
import { CoreActions } from 'src/app/core/state/actions/core.actions';
import { FeedbackType } from 'src/app/core/typings/feedback';
import { ConfirmDialogService } from 'src/app/shared/confirmDialog/dialog-confirm.service';
import { ConfirmDialogType } from 'src/app/shared/confirmDialog/typings/confirm-dialog';
import { DeleteReportTypeGQL } from '../../../api/generated/delete-report-type.mutation.generated';
import { GetReportTypesGQL } from '../../../api/generated/get-report-types.query.generated';
import { ReportAdminTypesActions } from './report-admin-types.actions';
import { selectParams } from './report-portal-types.selectors';

@Injectable()
export class ReportAdminTypesEffects {

  updateParams = createEffect(() => this.actions.pipe(
    ofType(
      ReportAdminTypesActions.updateParams,
      ReportAdminTypesActions.typeDeleted,
    ),
    withLatestFrom(this.store.select(selectParams)),
    switchMap(([, params]) => this.getReportTypesService.watch({ 
      params,
    }).valueChanges),
    map(response => ReportAdminTypesActions.setTypesData(response.data.getReportTypes as PageableList_ReportTypeEntity))
  ));

  deleteReport = createEffect(() => this.actions.pipe(
    ofType(ReportAdminTypesActions.deleteType),
    switchMap(action => this.confirmDialogService
      .confirm({ type: ConfirmDialogType.Delete, context: action.reportType?.name }) 
      .pipe(
        switchMap(confirmed => confirmed
          ? of(action.reportType)
          : EMPTY
        )
      )
    ),
    switchMap(reportType => this.deleteReportService.mutate({
      id: reportType?.id
    })),
    map(() => ReportAdminTypesActions.typeDeleted())
  ));

  reportDeleted = createEffect(() => this.actions.pipe(
    ofType(ReportAdminTypesActions.typeDeleted),
    map(() => CoreActions.setFeedback({
      type: FeedbackType.Success,
      labelMessage: 'deletedSuccessfully'
    }))
  ));

  constructor(
    private actions: Actions,
    private dialog: MatDialog,
    private deleteReportService: DeleteReportTypeGQL,
    private getReportTypesService: GetReportTypesGQL,
    private store: Store,
    private confirmDialogService: ConfirmDialogService
  ) {}
}
