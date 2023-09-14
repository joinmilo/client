import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs';
import { AdminActions } from 'src/app/admin/state/admin.actions';
import { ArticleEntity } from 'src/app/core/api/generated/schema';
import { GetArticleDetailsLayoutGQL } from 'src/app/features/article/api/generated/get-article-details-layout.query.generated';
import { ArticleAdminDetailsLayoutActions } from './article-admin-details-layout.actions';

@Injectable()
export class ArticleAdminDetailsLayoutEffects {

  getDetails = createEffect(() => this.actions.pipe(
    ofType(ArticleAdminDetailsLayoutActions.getDetails),
    switchMap((action) => this.getArticleService.watch({
      entity: {
        slug: action.slug
      }
    }).valueChanges),
    map(response => response.data.getArticle?.id
      ? ArticleAdminDetailsLayoutActions.setDetails(response.data.getArticle as ArticleEntity)
      : AdminActions.notFound())
  ));

  constructor(
    private actions: Actions,
    private getArticleService: GetArticleDetailsLayoutGQL,
  ) {}
}
