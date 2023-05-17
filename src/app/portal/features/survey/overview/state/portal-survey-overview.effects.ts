import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, switchMap } from "rxjs";
import { GetSurveysGQL, SurveyEntity } from "src/schema/schema";
import { PortalSurveyOverviewActions } from "./portal-survey-overview.actions";

@Injectable()
export class PortalSurveyOverviewEffects { 

  getSurveys = createEffect(() => this.actions.pipe(
    ofType(PortalSurveyOverviewActions.getSurveys),
    switchMap(() => this.getSurveyService.watch({
    
    }).valueChanges),
    map(response => PortalSurveyOverviewActions.setSurveys(response.data.getSurveys as SurveyEntity[]))  
  ));

  constructor(
    private actions: Actions,
    private getSurveyService: GetSurveysGQL
  ) {}
}