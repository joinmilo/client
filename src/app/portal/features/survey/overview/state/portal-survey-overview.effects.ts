import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from '@ngrx/store';
import { map, switchMap, withLatestFrom } from "rxjs";
import { GetSurveyGQL, GetSurveysGQL, PageableList_SurveyEntity, SurveyEntity } from "src/schema/schema";
import { PortalSurveyOverviewActions } from "./portal-survey-overview.actions";
import { selectParams } from './portal-survey-overview.selectors';

@Injectable()
export class PortalSurveyOverviewEffects { 

  getSponsoredSurvey = createEffect(() => this.actions.pipe(
    ofType(PortalSurveyOverviewActions.getSponsoredSurvey),
    switchMap(() => this.getSurveyService.watch({
      entity: {
        sponsored: true
      }
    }).valueChanges),
    map(response => PortalSurveyOverviewActions.setSponsoredSurvey(response.data.getSurvey as SurveyEntity))
  ))

 getSurveys = createEffect(() => this.actions.pipe(
    ofType(PortalSurveyOverviewActions.updateParams),
    withLatestFrom(this.store.select(selectParams)),
    switchMap(([, params]) => this.getSurveysService.watch({ 
      params,
    }).valueChanges),
    map(response => PortalSurveyOverviewActions.setOverviewData(response.data.getSurveys as PageableList_SurveyEntity))
  ));

  constructor(
    private actions: Actions,
    private getSurveyService: GetSurveyGQL,
    private getSurveysService: GetSurveysGQL,
    private store: Store,
  ) {}
}