import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map, switchMap, withLatestFrom } from 'rxjs';
import { selectParams } from './survey-portal-overview.selectors';
import { SurveyAdminOverviewActions } from './survey-admin-overview.actions';
import { GetSurveysGQL, PageableList_SurveyEntity } from 'src/schema/schema';

@Injectable()
export class SurveyAdminOverviewEffects {

  updateParams = createEffect(() => this.actions.pipe(
    ofType(SurveyAdminOverviewActions.updateParams),
    withLatestFrom(this.store.select(selectParams)),
    switchMap(([, params]) => this.getSurveys.watch({
      params,
    }).valueChanges),
    map(response => SurveyAdminOverviewActions.setOverviewData(response.data.getSurveys as PageableList_SurveyEntity))
  ));

  constructor(
    private actions: Actions,
    private getSurveys: GetSurveysGQL,
    private store: Store,
  ) {}
}
