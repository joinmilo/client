import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs';
import { AdminActions } from 'src/app/admin/state/admin.actions';
import { SurveyEntity } from 'src/app/core/api/generated/schema';
import { GetSurveyDetailsGQL } from 'src/app/features/survey/api/generated/get-survey-details.query.generated';
import { SurveyAdminDetailsLandingActions } from './survey-admin-details-landing.actions';

@Injectable()
export class SurveyAdminDetailsLandingEffects {

  getDetails = createEffect(() => this.actions.pipe(
    ofType(SurveyAdminDetailsLandingActions.getDetails),
    switchMap((action) => this.getSurveyService.watch({
      entity: {
        slug: action.slug
      }
    }).valueChanges),
    map(response => response.data.getSurvey?.id
      ? SurveyAdminDetailsLandingActions.setDetails(response.data.getSurvey as SurveyEntity)
      : AdminActions.notFound())
  ));
  
  constructor(
    private actions: Actions,
    private getSurveyService: GetSurveyDetailsGQL,
  ) {}
}
