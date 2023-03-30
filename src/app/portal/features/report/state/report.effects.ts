import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs';
import { FeedbackType } from 'src/app/core/typings/feedback';
import { ReportTypeEntity, SaveReportGQL } from 'src/schema/schema';
import { CoreActions } from '../../../../core/state/core.actions';
import { GetReportTypesGQL, ReportEntity } from './../../../../../schema/schema';
import { ReportActions } from './report.actions';

@Injectable()
export class ReportEffects {

  saveReport = createEffect(() => this.actions.pipe(
    ofType(ReportActions.saveReport),
    switchMap((action) => this.saveReportService.mutate({
      entity: action.entity
    })),
    map(response => ReportActions.reportSaved(response.data?.saveReport as ReportEntity))
  ));

  reportSaved = createEffect(() => this.actions.pipe(
    ofType(ReportActions.reportSaved),
    map(() => CoreActions.setFeedback({
      type: FeedbackType.Success,
      labelMessage: 'reportReceived'
    }))
  ));

  getCurrentTypes = createEffect(() => this.actions.pipe(
    ofType(ReportActions.getReportTypes),
    switchMap(() => this.getReportTypeService.watch().valueChanges),
    map(response => ReportActions.setCurrentTypes(response.data.getReportTypes?.result as ReportTypeEntity[]))
  ));


  constructor(
    private actions: Actions,
    private saveReportService: SaveReportGQL,
    private getReportTypeService: GetReportTypesGQL
  ) { }
}
