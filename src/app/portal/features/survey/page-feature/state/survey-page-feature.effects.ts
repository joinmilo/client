import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';
import { GetSurveysGQL } from 'src/schema/schema';

@Injectable()
export class SurveyPageFeatureEffects {

  // getRecentSurveys = createEffect(() => this.actions.pipe(
  //   ofType(SurveyPageFeatureActions.getRecentSurveys),
  //   switchMap(() => this.getSurveysService.watch({
  //     params: {
  //       sort: 'modified',
  //       dir: 'desc',
  //       size: 10,
  //     }
  //    }).valueChanges),
  //   map(response => SurveyPageFeatureActions.setRecentSurveys(response.data.getSurveys?.result as SurveyEntity[]))
  // ));

  constructor(
    private actions: Actions,
    private getSurveysService: GetSurveysGQL,
  ) {}
}
