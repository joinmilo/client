import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs';
import { FeedbackType } from 'src/app/core/typings/feedback';
import { ReportTypeEntity, SaveReportGQL } from 'src/schema/schema';
import { CoreActions } from '../../../../core/state/core.actions';
import { GetReportTypesGQL, ReportEntity } from './../../../../../schema/schema';
import { ReportActions, ReportTypeActions } from './report.actions';

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
      message: 'Dein Report is bei uns angekommen. Wir kümmern uns bald darum!'
    }))
  ));

  getCurrentTypes = createEffect(() => this.actions.pipe(
    ofType(ReportTypeActions.getReportTypes),
    switchMap(() => this.getReportTypeService.watch().valueChanges),
    map(response => ReportTypeActions.setCurrentTypes(response.data.getReportTypes?.result as ReportTypeEntity[]))
  ));

  constructor(
    private actions: Actions,
    private saveReportService: SaveReportGQL,
    private getReportTypeService: GetReportTypesGQL
  ) { }
}
