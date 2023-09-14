import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs';
import { AdminActions } from 'src/app/admin/state/admin.actions';
import { SurveyEntity } from 'src/app/core/api/generated/schema';
import { GetSurveyDetailsLayoutGQL } from 'src/app/features/survey/api/generated/get-survey-details-layout.query.generated';
import { SurveyAdminDetailsLayoutActions } from './survey-admin-details-layout.actions';

@Injectable()
export class SurveyAdminDetailsLayoutEffects {

  getDetails = createEffect(() => this.actions.pipe(
    ofType(SurveyAdminDetailsLayoutActions.getDetails),
    switchMap((action) => this.getSurveyService.watch({
      entity: {
        slug: action.slug
      }
    }).valueChanges),
    map(response => response.data.getSurvey?.id
      ? SurveyAdminDetailsLayoutActions.setDetails(response.data.getSurvey as SurveyEntity)
      : AdminActions.notFound())
  ));

  constructor(
    private actions: Actions,
    private getSurveyService: GetSurveyDetailsLayoutGQL,
  ) {}
}
