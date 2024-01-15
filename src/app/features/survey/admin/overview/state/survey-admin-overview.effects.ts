import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { EMPTY, map, of, switchMap, withLatestFrom } from 'rxjs';
import { PageableList_SurveyEntity } from 'src/app/core/api/generated/schema';
import { CoreActions } from 'src/app/core/state/actions/core.actions';
import { FeedbackType } from 'src/app/core/typings/feedback';
import { ConfirmService } from 'src/app/shared/confirm/service/confirm.service';
import { ConfirmType } from 'src/app/shared/confirm/typings/confirm';
import { DeleteSurveyGQL } from '../../../api/generated/delete-survey.mutation.generated';
import { GetSurveysGQL } from '../../../api/generated/get-surveys.query.generated';
import { SponsorSurveyGQL } from '../../../api/generated/sponsor-survey.mutation.generated';
import { SurveyAdminOverviewActions } from './survey-admin-overview.actions';
import { selectParams } from './survey-admin-overview.selectors';

@Injectable()
export class SurveyAdminOverviewEffects {

  updateParams = createEffect(() => this.actions.pipe(
    ofType(
      SurveyAdminOverviewActions.updateParams,
      SurveyAdminOverviewActions.surveyDeleted,
      SurveyAdminOverviewActions.surveySponsored
    ),
    withLatestFrom(this.store.select(selectParams)),
    switchMap(([, params]) => this.getSurveysService.watch({
      params,
    }).valueChanges),
    map(response => SurveyAdminOverviewActions.setOverviewData(response.data.getSurveys as PageableList_SurveyEntity))
  ));

  sponsorSurvey = createEffect(() => this.actions.pipe(
    ofType(SurveyAdminOverviewActions.sponsorSurvey),
    switchMap(action => this.confirmService
      .confirm({ type: ConfirmType.Change, context: 'thisWillSponsor' })
    .pipe(
        switchMap(confirmed => confirmed
          ? of(action.survey)
          : EMPTY
        )
      )
    ),
    switchMap(survey => this.sponsorSurveyService.mutate({
      surveyId: survey?.id,
    })),
    map(() => SurveyAdminOverviewActions.surveySponsored())
  ));

  surveySponsored = createEffect(() => this.actions.pipe(
    ofType(SurveyAdminOverviewActions.surveySponsored),
    map(() => CoreActions.setFeedback({
      type: FeedbackType.Success,
      labelMessage: 'changedSuccessfully'
    }))
  ));

  deleteSurvey = createEffect(() => this.actions.pipe(
    ofType(SurveyAdminOverviewActions.deleteSurvey),
    switchMap(action => this.confirmService
      .confirm({ type: ConfirmType.Delete, context: action.survey?.name }).pipe(
        switchMap(confirmed => confirmed
          ? of(action.survey)
          : EMPTY
        )
      )
    ),
    switchMap(survey => this.deleteSurveyService.mutate({
      id: survey?.id
    })),
    map(() => SurveyAdminOverviewActions.surveyDeleted())
  ));

  surveyDeleted = createEffect(() => this.actions.pipe(
    ofType(SurveyAdminOverviewActions.surveyDeleted),
    map(() => CoreActions.setFeedback({
      type: FeedbackType.Success,
      labelMessage: 'deletedSuccessfully'
    }))
  ));

  constructor(
    private actions: Actions,
    private dialog: MatDialog,
    private deleteSurveyService: DeleteSurveyGQL,
    private sponsorSurveyService: SponsorSurveyGQL,
    private getSurveysService: GetSurveysGQL,
    private store: Store,
    private confirmService: ConfirmService
  ) {}
}
