import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs';
import { PortalMenuActions } from 'src/app/portal/shared/menu/state/portal-menu.actions';
import { GetSurveyGQL, SurveyEntity } from 'src/schema/schema';
import { PortalSurveyDetailsActions } from './portal-survey-details.actions';

@Injectable()
export class PortalSurveyDetailsEffects {

  getDetails = createEffect(() => this.actions.pipe(
    ofType(PortalSurveyDetailsActions.getDetails),
    switchMap((action) => this.getSurveyService.watch({
      entity: {
        slug: action.slug
      }
    }).valueChanges),
    map(response => response.data.getSurvey?.id
      ? PortalSurveyDetailsActions.setDetails(response.data.getSurvey as SurveyEntity)
      : PortalMenuActions.notFound())
  ));

  constructor(
    private actions: Actions,
    private getSurveyService: GetSurveyGQL,
  ) { }
}
