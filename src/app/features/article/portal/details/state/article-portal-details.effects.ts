import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { FeedbackType } from 'ngx-cinlib/modals/feedback';
import { map, switchMap, withLatestFrom } from 'rxjs';
import { ArticleCommentEntity, ArticleEntity, ArticleRatingEntity, Maybe, QueryOperator } from 'src/app/core/api/generated/schema';
import { CoreUserActions } from 'src/app/core/state/actions/core-user.actions';
import { CoreActions } from 'src/app/core/state/actions/core.actions';
import { selectCurrentUser } from 'src/app/core/state/selectors/user.selectors';
import { PortalActions } from 'src/app/portal/state/portal.actions';
import { GetArticleCommentsGQL } from '../../../api/generated/get-article-comments.query.generated';
import { GetArticleDetailsGQL } from '../../../api/generated/get-article-details.query.generated';
import { SaveArticleCommentGQL } from '../../../api/generated/save-article-comment.mutation.generated';
import { SaveArticleRatingGQL } from '../../../api/generated/save-article-rating.mutation.generated';
import { ArticlePortalDetailsActions } from './article-portal-details.actions';
import { selectArticleDetails, selectArticleUserRating } from './article-portal-details.selectors';

@Injectable()
export class ArticlePortalDetailsEffects {

  getDetails = createEffect(() => this.actions.pipe(
    ofType(ArticlePortalDetailsActions.getDetails),
    switchMap((action) => this.getArticleService.watch({
      entity: {
        slug: action.slug
      }
    }).valueChanges),
    map(response => response.data.getArticle?.id
      ? ArticlePortalDetailsActions.setDetails(response.data.getArticle as ArticleEntity)
      : PortalActions.notFound())
  ));

  updateDetails = createEffect(() => this.actions.pipe(
    ofType(
      ArticlePortalDetailsActions.articleRatingSaved,
      ArticlePortalDetailsActions.articleCommentSaved
      ),
    withLatestFrom(this.store.select(selectArticleDetails)),
    switchMap(([, articleDetails]) => this.getArticleService.watch({
      entity: {
        slug: articleDetails?.slug
      }
    }).valueChanges),
    map(response => response.data.getArticle?.id
      ? ArticlePortalDetailsActions.detailsUpdated(response.data.getArticle as ArticleEntity)
      : PortalActions.notFound())
  ));

  detailsUpdated = createEffect(() => this.actions.pipe(
    ofType(ArticlePortalDetailsActions.detailsUpdated),
    map(() => CoreUserActions.updateUser())
  ));

  getComments = createEffect(() => this.actions.pipe(
    ofType(ArticlePortalDetailsActions.getComments),
    switchMap(action => this.getCommentsService.watch({
      params: {
        sort: 'created',
        dir: 'desc',
        expression: {
          entity: {
            path: 'article.slug',
            operator: QueryOperator.Equal,
            value: action.slug
          }
        }
      },
    }).valueChanges),
    map(response => ArticlePortalDetailsActions.setComments(response.data.getArticleComments?.result as Maybe<ArticleCommentEntity[]>))
  ));

  saveArticleRating = createEffect(() => this.actions.pipe(
    ofType(ArticlePortalDetailsActions.saveArticleRating),
    withLatestFrom(
      this.store.select(selectArticleDetails),
      this.store.select(selectCurrentUser),
      this.store.select(selectArticleUserRating),
    ),
    map(([action, article, user, rating]) => rating?.id
      ? { ...action.entity, id: rating.id }
      : { ...action.entity,
          parent: { id: article?.id },
          userContext: { id: user?.id}
        }
    ),
    switchMap((entity) => this.saveArticleRatingService.mutate({
      entity: entity
    })),
    map(response => ArticlePortalDetailsActions.articleRatingSaved(response.data?.saveArticleRating as ArticleRatingEntity))
  ));

  articleRatingSaved = createEffect(() => this.actions.pipe(
    ofType(ArticlePortalDetailsActions.articleRatingSaved),
    map(() => CoreActions.setFeedback({
      type: FeedbackType.Success,
      labelMessage: 'ratingSaved'
    }))
  ));

  saveArticleComment = createEffect(() => this.actions.pipe(
    ofType(ArticlePortalDetailsActions.saveArticleComment),
    withLatestFrom(
      this.store.select(selectArticleDetails),
      this.store.select(selectCurrentUser),
    ),
    map(([action, article, user]) => (
      {
        ...action.entity,
        article: { id: article?.id },
        userContext: { id: user?.id }
      }
    )),
    switchMap(entity => this.saveArticleCommentService.mutate({
      entity
    })),
    map(response => ArticlePortalDetailsActions.articleCommentSaved(response.data?.saveArticleComment as ArticleCommentEntity))
  ));

  articleCommentSaved = createEffect(() => this.actions.pipe(
    ofType(ArticlePortalDetailsActions.articleCommentSaved),
    map(() => CoreActions.setFeedback({
      type: FeedbackType.Success,
      labelMessage: 'commentSaved'
    }))
  ));

  constructor(
    private store: Store,
    private actions: Actions,
    private getArticleService: GetArticleDetailsGQL,
    private getCommentsService: GetArticleCommentsGQL,
    private saveArticleRatingService: SaveArticleRatingGQL,
    private saveArticleCommentService: SaveArticleCommentGQL
  ) { }
}
