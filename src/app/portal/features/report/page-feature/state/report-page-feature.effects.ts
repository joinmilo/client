import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable, combineLatest, filter, map, of, switchMap } from 'rxjs';
import { CoreActions } from 'src/app/core/state/core.actions';
import { FeedbackType } from 'src/app/core/typings/feedback';
import { GetReportTypesGQL, Maybe, ReportEntity, ReportTypeEntity, SaveReportGQL } from 'src/schema/schema';
import { ReportPageFeatureCaptchaComponent } from '../components/captcha/report-page-feature-captcha.component';
import { ReportPageFeatureActions } from './report-page-feature.actions';

@Injectable()
export class ReportPageFeatureEffects {

  saveReport = createEffect(() => this.actions.pipe(
    ofType(ReportPageFeatureActions.saveReport),
    switchMap(action =>
      combineLatest([
        of(action.entity),
        this.dialog.open(ReportPageFeatureCaptchaComponent).afterClosed() as Observable<Maybe<string> | undefined>,
      ])
    ),
    filter(([, captchaToken]) => !!captchaToken),
    map(([entity, captchaToken]) => ReportPageFeatureActions.confirmedSaveReport({
      ...entity, captchaToken
    }))
  ));

  confirmedSavedReport = createEffect(() => this.actions.pipe(
    ofType(ReportPageFeatureActions.confirmedSaveReport),
    switchMap((action) => this.saveReportService.mutate({
      entity: action.entity
    })),
    map(response => ReportPageFeatureActions.reportSaved(response.data?.saveReport as ReportEntity))
  ));

  reportSaved = createEffect(() => this.actions.pipe(
    ofType(ReportPageFeatureActions.reportSaved),
    map(() => CoreActions.setFeedback({
      type: FeedbackType.Success,
      labelMessage: 'reportReceived'
    }))
  ));

  getCurrentTypes = createEffect(() => this.actions.pipe(
    ofType(ReportPageFeatureActions.getReportTypes),
    switchMap(() => this.getReportTypeService.watch().valueChanges),
    map(response => ReportPageFeatureActions.setCurrentTypes(response.data.getReportTypes?.result as ReportTypeEntity[]))
  ));


  constructor(
    private actions: Actions,
    private dialog: MatDialog,
    private saveReportService: SaveReportGQL,
    private getReportTypeService: GetReportTypesGQL
  ) { }
  
}
