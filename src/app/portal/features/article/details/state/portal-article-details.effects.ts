import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map, switchMap, withLatestFrom } from 'rxjs';
import { CoreUserActions } from 'src/app/core/state/actions/core-user.actions';
import { CoreActions } from 'src/app/core/state/actions/core.actions';
import { selectCurrentUser } from 'src/app/core/state/selectors/user.selectors';
import { FeedbackType } from 'src/app/core/typings/feedback';
import { PortalMenuActions } from 'src/app/portal/shared/menu/state/portal-menu.actions';
import { ArticleCommentEntity, ArticleEntity, ArticleRatingEntity, GetArticleCommentsGQL, GetArticleGQL, Maybe, QueryOperator, SaveArticleCommentGQL, SaveArticleRatingGQL } from 'src/schema/schema';
import { PortalArticleDetailsActions } from './portal-article-details.actions';
import { selectArticleDetails, selectArticleUserRating } from './portal-article-details.selectors';

@Injectable()
export class PortalArticleDetailsEffects {

  getDetails = createEffect(() => this.actions.pipe(
    ofType(PortalArticleDetailsActions.getDetails),
    switchMap((action) => this.getArticleService.watch({
      entity: {
        slug: action.slug
      }
    }).valueChanges),
    map(response => response.data.getArticle?.id
      ? PortalArticleDetailsActions.setDetails(response.data.getArticle as ArticleEntity)
      : PortalMenuActions.notFound())
  ));

  updateDetails = createEffect(() => this.actions.pipe(
    ofType(
      PortalArticleDetailsActions.articleRatingSaved,
      PortalArticleDetailsActions.articleCommentSaved
      ),
    withLatestFrom(this.store.select(selectArticleDetails)),
    switchMap(([, articleDetails]) => this.getArticleService.watch({
      entity: {
        slug: articleDetails?.slug
      }
    }).valueChanges),
    map(response => response.data.getArticle?.id
      ? PortalArticleDetailsActions.detailsUpdated(response.data.getArticle as ArticleEntity)
      : PortalMenuActions.notFound())
  ));

  detailsUpdated = createEffect(() => this.actions.pipe(
    ofType(PortalArticleDetailsActions.detailsUpdated),
    map(() => CoreUserActions.updateUser())
  ));

  getComments = createEffect(() => this.actions.pipe(
    ofType(PortalArticleDetailsActions.getComments),
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
    map(response => PortalArticleDetailsActions.setComments(response.data.getArticleComments?.result as Maybe<ArticleCommentEntity[]>))
  ));

  saveArticleRating = createEffect(() => this.actions.pipe(
    ofType(PortalArticleDetailsActions.saveArticleRating),
    withLatestFrom(
      this.store.select(selectArticleDetails),
      this.store.select(selectCurrentUser),
      this.store.select(selectArticleUserRating),
    ),
    map(([action, article, user, rating]) => rating?.id
      ? { ...action.entity, id: rating.id }
      : { ...action.entity,
          article: { id: article?.id },
          userContext: { id: user?.id}
        }
    ),
    switchMap((entity) => this.saveArticleRatingService.mutate({
      entity: entity
    })),
    map(response => PortalArticleDetailsActions.articleRatingSaved(response.data?.saveArticleRating as ArticleRatingEntity))
  ));

  articleRatingSaved = createEffect(() => this.actions.pipe(
    ofType(PortalArticleDetailsActions.articleRatingSaved),
    map(() => CoreActions.setFeedback({
      type: FeedbackType.Success,
      labelMessage: 'ratingSaved'
    }))
  ));

  saveArticleComment = createEffect(() => this.actions.pipe(
    ofType(PortalArticleDetailsActions.saveArticleComment),
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
    map(response => PortalArticleDetailsActions.articleCommentSaved(response.data?.saveArticleComment as ArticleCommentEntity))
  ));

  articleCommentSaved = createEffect(() => this.actions.pipe(
    ofType(PortalArticleDetailsActions.articleCommentSaved),
    map(() => CoreActions.setFeedback({
      type: FeedbackType.Success,
      labelMessage: 'commentSaved'
    }))
  ));

  constructor(
    private store: Store,
    private actions: Actions,
    private getArticleService: GetArticleGQL,
    private getCommentsService: GetArticleCommentsGQL,
    private saveArticleRatingService: SaveArticleRatingGQL,
    private saveArticleCommentService: SaveArticleCommentGQL
  ) { }
}
