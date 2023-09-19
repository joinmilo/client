import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { EMPTY, map, of, switchMap, withLatestFrom } from 'rxjs';
import { PageableList_ReportEntity } from 'src/app/core/api/generated/schema';
import { CoreActions } from 'src/app/core/state/actions/core.actions';
import { FeedbackType } from 'src/app/core/typings/feedback';
import { ConfirmDeleteComponent } from 'src/app/shared/dialogs/confirm-delete/confirm-delete.component';
import { DeleteReportGQL } from '../../../api/generated/delete-report.mutation.generated';
import { GetReportsGQL } from '../../../api/generated/get-reports.query.generated';
import { ReportAdminOverviewActions } from './report-admin-overview.actions';
import { selectParams } from './report-portal-overview.selectors';

@Injectable()
export class ReportAdminOverviewEffects {

  updateParams = createEffect(() => this.actions.pipe(
    ofType(
      ReportAdminOverviewActions.updateParams,
      ReportAdminOverviewActions.reportDeleted,
    ),
    withLatestFrom(this.store.select(selectParams)),
    switchMap(([, params]) => this.getReportsService.watch({ 
      params,
    }).valueChanges),
    map(response => ReportAdminOverviewActions.setOverviewData(response.data.getReports as PageableList_ReportEntity))
  ));

  deleteReport = createEffect(() => this.actions.pipe(
    ofType(ReportAdminOverviewActions.deleteReport),
    switchMap(action => this.dialog.open(ConfirmDeleteComponent, { data: action.report?.name })
      .afterClosed().pipe(
        switchMap(confirmed => confirmed
          ? of(action.report)
          : EMPTY
        )
      )
    ),
    switchMap(report => this.deleteReportService.mutate({
      id: report?.id
    })),
    map(() => ReportAdminOverviewActions.reportDeleted())
  ));

  reportDeleted = createEffect(() => this.actions.pipe(
    ofType(ReportAdminOverviewActions.reportDeleted),
    map(() => CoreActions.setFeedback({
      type: FeedbackType.Success,
      labelMessage: 'deletedSuccessfully'
    }))
  ));

  constructor(
    private actions: Actions,
    private dialog: MatDialog,
    private deleteReportService: DeleteReportGQL,
    private getReportsService: GetReportsGQL,
    private store: Store,
  ) {}
}
