import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { FeedbackType } from 'ngx-cinlib/modals/feedback';
import { map, switchMap } from 'rxjs';
import { ReportEntity, ReportTypeEntity } from 'src/app/core/api/generated/schema';
import { CoreActions } from 'src/app/core/state/actions/core.actions';
import { GetReportTypesGQL } from '../../api/generated/get-report-types.query.generated';
import { SaveReportGQL } from '../../api/generated/save-report.mutation.generated';
import { ReportEmbeddingActions } from './report-embedding.actions';

@Injectable()
export class ReportEmbeddingEffects {

  saveReport = createEffect(() => this.actions.pipe(
    ofType(ReportEmbeddingActions.saveReport),
    switchMap((action) => this.saveReportService.mutate({
      entity: action.entity
    })),
    map(response => ReportEmbeddingActions.reportSaved(response.data?.saveReport as ReportEntity))
  ));

  reportSaved = createEffect(() => this.actions.pipe(
    ofType(ReportEmbeddingActions.reportSaved),
    map(() => CoreActions.setFeedback({
      type: FeedbackType.Success,
      labelMessage: 'reportReceived'
    }))
  ));

  getCurrentTypes = createEffect(() => this.actions.pipe(
    ofType(ReportEmbeddingActions.getReportTypes),
    switchMap(() => this.getReportTypeService.watch().valueChanges),
    map(response => ReportEmbeddingActions.setCurrentTypes(response.data.getReportTypes?.result as ReportTypeEntity[]))
  ));


  constructor(
    private actions: Actions,
    private saveReportService: SaveReportGQL,
    private getReportTypeService: GetReportTypesGQL
  ) { }
  
}
