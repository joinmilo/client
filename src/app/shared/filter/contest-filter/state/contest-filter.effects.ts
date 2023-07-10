import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap, tap } from 'rxjs';
import { ContestFilterQueryDefinition, FilterQueryDefinition } from 'src/app/core/typings/filter-param';
import { ContestTypeEntity, GetContestTypesGQL } from 'src/schema/schema';
import { ContestFilterActions } from './contest-filter.actions';

@Injectable()
export class ContestFilterEffects {

  updateAll = createEffect(() => this.actions.pipe(
    ofType(ContestFilterActions.updateAll),
    map(action => {
      const params: Record<string, unknown> = {};
      Object.values(ContestFilterQueryDefinition).forEach((value) => {
        switch (true) {
          case action.queryParams[value] === 'true' || action.queryParams[value] === 'false':
            params[value] = action.queryParams[value] === 'true';
            break;
          default:
            params[value] = action.queryParams[value];
        }
      });
      return ContestFilterActions.allUpdated(params);
    })
  ));

  // Normally this should be handled within the components but because of merge
  // this most probably leads to a race condition where not all params are removed.
  clearAll = createEffect(() => this.actions.pipe(
    ofType(ContestFilterActions.clearAll),
    tap(() => {
      const queryParams: Record<string, null> = {};

      [...Object.values(ContestFilterQueryDefinition), ...Object.values(FilterQueryDefinition)]
        .forEach((value) => queryParams[value] = null);

      this.router.navigate([], {
        queryParams,
        queryParamsHandling: 'merge',
      });
    }),
  ), { dispatch: false });

  getTypes = createEffect(() => this.actions.pipe(
    ofType(ContestFilterActions.getTypes),
    switchMap(() => this.getTypesService.watch().valueChanges),
    map(response => ContestFilterActions.setTypes(response.data.getContestTypes?.result as ContestTypeEntity[]))
  ));

  constructor(
    private actions: Actions,
    private getTypesService: GetContestTypesGQL,
    private router: Router,
  ) { }
}
