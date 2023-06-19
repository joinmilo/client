import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs';
import { GetSurveysGQL, SurveyEntity } from 'src/schema/schema';
import { SurveyPageFeatureActions } from './survey-page-feature.actions';

@Injectable()
export class SurveyPageFeatureEffects {

  getRecentSurveys = createEffect(() => this.actions.pipe(
    ofType(SurveyPageFeatureActions.getRecentSurveys),
    switchMap(() => this.getSurveysService.watch({
      params: {
        sort: 'modified',
        dir: 'desc',
        size: 10,
      }
     }).valueChanges),
    map(response => SurveyPageFeatureActions.setRecentSurveys(response.data.getSurveys?.result as SurveyEntity[]))
  ));

  constructor(
    private actions: Actions,
    private getSurveysService: GetSurveysGQL,
  ) {}
}
