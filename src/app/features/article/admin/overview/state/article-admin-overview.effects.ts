import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { EMPTY, map, of, switchMap, withLatestFrom } from 'rxjs';
import { PageableList_ArticleEntity, QueryOperator } from 'src/app/core/api/generated/schema';
import { AuthService } from 'src/app/core/services/auth.service';
import { CoreActions } from 'src/app/core/state/actions/core.actions';
import { selectCurrentUser } from 'src/app/core/state/selectors/user.selectors';
import { FeedbackType } from 'src/app/core/typings/feedback';
import { ConfirmService } from 'src/app/shared/confirm/service/confirm.service';
import { ConfirmType } from 'src/app/shared/confirm/typings/confirm';
import { DeleteArticleGQL } from '../../../api/generated/delete-article.mutation.generated';
import { GetArticlesGQL } from '../../../api/generated/get-articles.query.generated';
import { SponsorArticleGQL } from '../../../api/generated/sponsor-article.mutation.generated';
import { ArticleAdminOverviewActions } from './article-admin-overview.actions';
import { selectParams } from './article-admin-overview.selectors';

@Injectable()
export class ArticleAdminOverviewEffects {

  updateParams = createEffect(() => this.actions.pipe(
    ofType(
      ArticleAdminOverviewActions.updateParams,
      ArticleAdminOverviewActions.articleDeleted,
      ArticleAdminOverviewActions.articleSponsored,
    ),
    withLatestFrom(
      this.store.select(selectParams),
      this.store.select(selectCurrentUser),
    ),
    map(([, params, user]) => {
      const baseParams = {
        ...params,
          expression: {
            conjunction: {
              operands: [
                {
                  entity: {
                    path: 'approved',
                    operator: QueryOperator.Equal,
                    value: 'true'
                  }
                }
              ]
            }
          }
      }

      if (!this.authService.hasAnyPrivileges(['articles_admin'])) {
        baseParams.expression.conjunction.operands.push({
          entity: {
            path: 'author.id',
            operator: QueryOperator.Equal,
            value: user?.id as string
          }
        });
      }

      return baseParams;
    }),
    switchMap(params => this.getArticlesService.watch({ params }).valueChanges),
    map(response => ArticleAdminOverviewActions.setOverviewData(response.data.getArticles as PageableList_ArticleEntity))
  ));

  sponsorArticle = createEffect(() => this.actions.pipe(
    ofType(ArticleAdminOverviewActions.sponsorArticle),
    switchMap(action => this.confirmService
      .confirm({ type: ConfirmType.Change, context: 'thisWillSponsor' }).pipe(
        switchMap(confirmed => confirmed
          ? of(action.article)
          : EMPTY
        )
      )
    ),
    switchMap(article => this.sponsorArticleService.mutate({
      articleId: article?.id,
    })),
    map(() => ArticleAdminOverviewActions.articleSponsored())
  ));

  articleSponsored = createEffect(() => this.actions.pipe(
    ofType(ArticleAdminOverviewActions.articleSponsored),
    map(() => CoreActions.setFeedback({
      type: FeedbackType.Success,
      labelMessage: 'changedSuccessfully'
    }))
  ));

  deleteArticle = createEffect(() => this.actions.pipe(
    ofType(ArticleAdminOverviewActions.deleteArticle),
    switchMap(action => this.confirmService
      .confirm({ type: ConfirmType.Delete, context: action.article?.name }).pipe(
        switchMap(confirmed => confirmed
          ? of(action.article)
          : EMPTY
        )
      )
    ),
    switchMap(article => this.deleteArticleService.mutate({
      id: article?.id
    })),
    map(() => ArticleAdminOverviewActions.articleDeleted())
  ));

  articleDeleted = createEffect(() => this.actions.pipe(
    ofType(ArticleAdminOverviewActions.articleDeleted),
    map(() => CoreActions.setFeedback({
      type: FeedbackType.Success,
      labelMessage: 'deletedSuccessfully'
    }))
  ));

  constructor(
    private actions: Actions,
    private authService: AuthService,
    private confirmService: ConfirmService,
    private deleteArticleService: DeleteArticleGQL,
    private getArticlesService: GetArticlesGQL,
    private sponsorArticleService: SponsorArticleGQL,
    private store: Store,
  ) {}
}
