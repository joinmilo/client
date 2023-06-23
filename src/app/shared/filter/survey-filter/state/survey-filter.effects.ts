import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, tap } from 'rxjs';
import { FilterQueryDefinition, SurveyFilterQueryDefinition } from 'src/app/core/typings/filter-param';
import { SurveyFilterActions } from './survey-filter.actions';

@Injectable()
export class SurveyFilterEffects {

  updateAll = createEffect(() => this.actions.pipe(
    ofType(SurveyFilterActions.updateAll),
    map(action => {
      const params: Record<string, unknown> = {};
      Object.values(SurveyFilterQueryDefinition).forEach((value) => {
        switch (true) {
          case action.queryParams[value] === 'true' || action.queryParams[value] === 'false':
            params[value] = action.queryParams[value] === 'true';
            break;
          default:
            params[value] = action.queryParams[value];
        }
      });
      return SurveyFilterActions.allUpdated(params);
    })  
  ));

  // Normally this should be handled within the components but because of merge
  // this most probably leads to a race condition where not all params are removed.
  clearAll = createEffect(() => this.actions.pipe(
    ofType(SurveyFilterActions.clearAll),
    tap(() => {
      const queryParams: Record<string, null> = {};

      [...Object.values(SurveyFilterQueryDefinition), ...Object.values(FilterQueryDefinition)]
        .forEach((value) => queryParams[value] = null );

      this.router.navigate([], {
        queryParams,
        queryParamsHandling: 'merge',
    });
  }),
  ), { dispatch: false });


  constructor(
    private actions: Actions,
    private router: Router,
  ) { }
}
