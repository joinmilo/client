import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap, tap } from 'rxjs';
import { DealFilterQueryDefinition } from 'src/app/core/typings/filter-params/deal-filter-param';
import { FilterQueryDefinition } from 'src/app/core/typings/filter-params/filter-param';
import { DealCategoryEntity, GetDealCategoriesGQL } from 'src/schema/schema';
import { DealFilterActions } from './deal-filter.actions';

@Injectable()
export class DealFilterEffects {

  updateAll = createEffect(() => this.actions.pipe(
    ofType(DealFilterActions.updateAll),
    map(action => {
      const params: Record<string, unknown> = {};
      Object.values(DealFilterQueryDefinition).forEach((value) => {
        switch (true) {
          case action.queryParams[value] === 'true' || action.queryParams[value] === 'false':
            params[value] = action.queryParams[value] === 'true';
            break;
          default:
            params[value] = action.queryParams[value];
        }
      });
      return DealFilterActions.allUpdated(params);
    })
  ));

  // Normally this should be handled within the components but because of merge
  // this most probably leads to a race condition where not all params are removed.
  clearAll = createEffect(() => this.actions.pipe(
    ofType(DealFilterActions.clearAll),
    tap(() => {
      const queryParams: Record<string, null> = {};

      [...Object.values(DealFilterQueryDefinition), ...Object.values(FilterQueryDefinition)]
        .forEach((value) => queryParams[value] = null);

      this.router.navigate([], {
        queryParams,
        queryParamsHandling: 'merge',
      });
    }),
  ), { dispatch: false });

  getCategories = createEffect(() => this.actions.pipe(
    ofType(DealFilterActions.getCategories),
    switchMap(() => this.getCategoriesService.watch().valueChanges),
    map(response => DealFilterActions.setCategories(response.data.getDealCategories?.result as DealCategoryEntity[]))
  ));

  constructor(
    private actions: Actions,
    private getCategoriesService: GetDealCategoriesGQL,
    private router: Router,
  ) { }
}
