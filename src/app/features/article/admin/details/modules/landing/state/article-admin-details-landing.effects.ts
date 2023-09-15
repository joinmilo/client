import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs';
import { AdminActions } from 'src/app/admin/state/admin.actions';
import { ArticleEntity } from 'src/app/core/api/generated/schema';
import { GetArticleDetailsGQL } from 'src/app/features/article/api/generated/get-article-details.query.generated';
import { ArticleAdminDetailsLandingActions } from './article-admin-details-landing.actions';

@Injectable()
export class ArticleAdminDetailsLandingEffects {

  getDetails = createEffect(() => this.actions.pipe(
    ofType(ArticleAdminDetailsLandingActions.getDetails),
    switchMap((action) => this.getArticleService.watch({
      entity: {
        slug: action.slug
      }
    }).valueChanges),
    map(response => response.data.getArticle?.id
      ? ArticleAdminDetailsLandingActions.setDetails(response.data.getArticle as ArticleEntity)
      : AdminActions.notFound())
  ));

  constructor(
    private actions: Actions,
    private getArticleService: GetArticleDetailsGQL,
  ) {}
}
