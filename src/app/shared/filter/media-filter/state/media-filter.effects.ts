import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { debounceTime, map, switchMap, take, tap } from 'rxjs';
import { FilterQueryDefinition } from 'src/app/core/typings/filter-params/filter-param';
import { GetInfoMediaCategoriesGQL, InfoMediaCategoryEntity } from 'src/schema/schema';
import { MediaFilterActions } from './media-filter.actions';
import { MediaFilterQueryDefinition } from 'src/app/core/typings/filter-params/media-filter-param';

@Injectable()
export class MediaFilterEffects {

  init = createEffect(() => this.actions.pipe(
    ofType(MediaFilterActions.init),
    switchMap(() => this.activatedRoute.queryParams),
    debounceTime(0),
    take(1),
    map(params => MediaFilterActions.queryParamsInitialized(params))
  ));

  updateByQueryParams = createEffect(() => this.actions.pipe(
    ofType(
      MediaFilterActions.queryParamsInitialized,
      MediaFilterActions.browserNavigated
    ),
    map(action => {
      const params: Record<string, unknown> = {};
      Object.values(MediaFilterQueryDefinition).forEach((value) => {
        switch (true) {
          case action.params[value] === 'true' || action.params[value] === 'false':
            params[value] = action.params[value] === 'true';
            break;
          default:
            params[value] = action.params[value];
        }
      });
      return MediaFilterActions.allUpdated(params);
    })
  ));

  clearAll = createEffect(() => this.actions.pipe(
    ofType(MediaFilterActions.clearAll),
    tap(() => {
      const queryParams: Record<string, null> = {};

      [...Object.values(MediaFilterQueryDefinition), ...Object.values(FilterQueryDefinition)]
        .forEach((value) => queryParams[value] = null );

      this.router.navigate([], {
        queryParams,
        queryParamsHandling: 'merge',
    });
  }),
  ), { dispatch: false });

  getCategories = createEffect(() => this.actions.pipe(
    ofType(MediaFilterActions.getCategories),
    switchMap(() => this.getCategoriesService.watch().valueChanges),
    map(response => MediaFilterActions.setCategories(response.data.getInfoMediaCategories?.result as InfoMediaCategoryEntity[]))
  ));

  constructor(
    private actions: Actions,
    private activatedRoute: ActivatedRoute,
    private getCategoriesService: GetInfoMediaCategoriesGQL,
    private router: Router,
  ) { }
}
