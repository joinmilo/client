import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap, tap } from 'rxjs';
import { ArticleFilterQueryDefinition } from 'src/app/core/typings/filter-params/article-filter-param';
import { FilterQueryDefinition } from 'src/app/core/typings/filter-params/filter-param';
import { ArticleCategoryEntity, GetArticleCategoriesGQL } from 'src/schema/schema';
import { ArticleFilterActions } from './article-filter.actions';

@Injectable()
export class ArticleFilterEffects {

  updateAll = createEffect(() => this.actions.pipe(
    ofType(ArticleFilterActions.updateAll),
    map(action => {
      const params: Record<string, unknown> = {};
      Object.values(ArticleFilterQueryDefinition).forEach((value) => {
        switch (true) {
          case action.queryParams[value] === 'true' || action.queryParams[value] === 'false':
            params[value] = action.queryParams[value] === 'true';
            break;
          default:
            params[value] = action.queryParams[value];
        }
      });
      return ArticleFilterActions.allUpdated(params);
    })  
  ));

  // Normally this should be handled within the components but because of merge
  // this most probably leads to a race condition where not all params are removed.
  clearAll = createEffect(() => this.actions.pipe(
    ofType(ArticleFilterActions.clearAll),
    tap(() => {
      const queryParams: Record<string, null> = {};

      [...Object.values(ArticleFilterQueryDefinition), ...Object.values(FilterQueryDefinition)]
        .forEach((value) => queryParams[value] = null );

      this.router.navigate([], {
        queryParams,
        queryParamsHandling: 'merge',
    });
  }),
  ), { dispatch: false });

  getCategories = createEffect(() => this.actions.pipe(
    ofType(ArticleFilterActions.getCategories),
    switchMap(() => this.getCategoriesService.watch().valueChanges),
    map(response => ArticleFilterActions.setCategories(response.data.getArticleCategories?.result as ArticleCategoryEntity[]))
  ));

  constructor(
    private actions: Actions,
    private getCategoriesService: GetArticleCategoriesGQL,
    private router: Router,
  ) { }
}
