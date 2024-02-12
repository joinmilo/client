import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { TranslationService } from 'ngx-cinlib/i18n';
import { FeedbackService, FeedbackType } from 'ngx-cinlib/modals/feedback';
import { AuthService, refreshKey } from 'ngx-cinlib/security';
import { EMPTY } from 'rxjs';
import { delay, filter, map, switchMap, tap, withLatestFrom } from 'rxjs/operators';
import { UserContextEntity } from 'src/app/core/api/generated/schema';
import { AddFavoriteArticleGQL } from '../../api/generated/add-favorite-article.mutation.generated';
import { AddFavoriteAuthorGQL } from '../../api/generated/add-favorite-author.mutation.generated';
import { AddFavoriteDealGQL } from '../../api/generated/add-favorite-deal.mutation.generated';
import { AddFavoriteEventGQL } from '../../api/generated/add-favorite-event.mutation.generated';
import { AddFavoriteOrganisationGQL } from '../../api/generated/add-favorite-organisation.mutation.generated';
import { GetMeGQL } from '../../api/generated/get-me.query.generated';
import { RemoveFavoriteArticleGQL } from '../../api/generated/remove-favorite-article.mutation.generated';
import { RemoveFavoriteAuthorGQL } from '../../api/generated/remove-favorite-author.mutation.generated';
import { RemoveFavoriteDealGQL } from '../../api/generated/remove-favorite-deal.mutation.generated';
import { RemoveFavoriteEventGQL } from '../../api/generated/remove-favorite-event.mutation.generated';
import { RemoveFavoriteOrganisationGQL } from '../../api/generated/remove-favorite-organisation.mutation.generated';
import { CookieComponent } from '../../components/cookie/cookie.component';
import { accountUrl } from '../../constants/module.constants';
import { CoreUserActions } from '../actions/core-user.actions';
import { CoreActions } from '../actions/core.actions';
import { selectCookieSettings } from '../selectors/user.selectors';

@Injectable()
export class CoreUserEffects {

  ngrxOnInitEffects(): Action {
    return CoreUserActions.init();
  }

  getCurrentUser = createEffect(() => this.actions.pipe(
    ofType(
      CoreUserActions.init,
      CoreUserActions.updateUser,
    ),
    filter(() => !!localStorage.getItem(refreshKey)),
    switchMap(() => this.getMeService.watch().valueChanges),
    filter(response => !!response.data.me?.id),
    map(response => CoreUserActions.getMe(response.data.me as UserContextEntity))
  ));

  login = createEffect(() => this.actions.pipe(
    ofType(CoreUserActions.login),
    filter(action => !!action.email && !!action.password),
    switchMap((action) => this.authService.login(
      action.email,
      action.password
    )),
    filter(tokens => !!tokens),
    map(() => CoreUserActions.loggedIn())
  ));

  loggedIn = createEffect(() => this.actions.pipe(
    ofType(CoreUserActions.loggedIn),
    switchMap(() => this.getMeService.watch().valueChanges),
    map(response => response.data.me as UserContextEntity),
    filter(currentUser => !!currentUser?.id),
    tap(() => this.feedbackService.open({
      type: FeedbackType.Success,
      labelMessage: 'youreLoggedIn'
    })),
    tap(currentUser => {
      currentUser?.user?.lastLogin
        ? this.router.navigate([''])
        : this.router.navigate([`/${accountUrl}`, 'login-stepper']);
    }),
    map(currentUser => CoreUserActions.getMe(currentUser)),
  ));

  changeUserLanguage = createEffect(() => this.actions.pipe(
    ofType(CoreUserActions.getMe),
    filter(response => !!response.user?.user?.language),
    tap(response => this.translationService.setCurrentLanguage(response.user?.user?.language))
  ), { dispatch: false });

  listenOnClear = createEffect(() => this.actions.pipe(
    ofType(CoreUserActions.init),
    switchMap(() => this.authService.cleared()),
    filter(cleared => cleared),
    map(() => CoreUserActions.clear())
  ));

  clear = createEffect(() => this.actions.pipe(
    ofType(CoreUserActions.clear),
    tap(() => this.router.navigate([''])),
    map(() => CoreActions.setFeedback({
      type: FeedbackType.Success,
      labelMessage: 'youreLoggedOut'
    }))
  ));

  requireLogin = createEffect(() => this.actions.pipe(
    ofType(CoreUserActions.requireLogin),
    tap(() => this.router.navigate([`/${accountUrl}`, 'login-required'])),
  ), { dispatch: false });

  openCookieDialog = createEffect(() => this.actions.pipe(
    ofType(CoreUserActions.init),
    delay(1500),
    withLatestFrom(this.store.select(selectCookieSettings)),
    tap(([, cookieSettings]) => {
      if (!cookieSettings) {
        this.dialog.open(CookieComponent, {
          disableClose: true,
          autoFocus: false,
        });
      }
    })
  ), { dispatch: false });

  addFavorite = createEffect(() => this.actions.pipe(
    ofType(CoreUserActions.addFavorite),
    switchMap(action => {
      switch (action.entity) {
        case 'ArticleEntity':
          return this.addFavoriteArticleService.mutate({
            articleId: action.entityId
          });
        case 'DealEntity':
          return this.addFavoriteDealService.mutate({
            dealId: action.entityId
          });
        case 'EventEntity':
          return this.addFavoriteEventService.mutate({
            eventId: action.entityId
          });
        case 'OrganisationEntity':
          return this.addFavoriteOrganisationService.mutate({
            organisationId: action.entityId
          });
        case 'UserContextEntity':
          return this.addFavoriteAuthorService.mutate({
            userContextId: action.entityId
          });
      }
      return EMPTY;
    }),
    map(() => CoreUserActions.updateUser()),
  ));

  removeFavorite = createEffect(() => this.actions.pipe(
    ofType(CoreUserActions.removeFavorite),
    switchMap(action => {
      switch (action.entity) {
        case 'ArticleEntity':
          return this.removeFavoriteArticleService.mutate({
            articleId: action.entityId
          });
        case 'DealEntity':
          return this.removeFavoriteDealService.mutate({
            dealId: action.entityId
          });
        case 'EventEntity':
          return this.removeFavoriteEventService.mutate({
            eventId: action.entityId
          });
        case 'OrganisationEntity':
          return this.removeFavoriteOrganisationService.mutate({
            organisationId: action.entityId
          });
        case 'UserContextEntity':
          return this.removeFavoriteAuthorService.mutate({
            userContextId: action.entityId
          });
      }
      return EMPTY;
    }),
    map(() => CoreUserActions.updateUser()),
  ));

  constructor(
    private actions: Actions,
    private authService: AuthService,
    private addFavoriteArticleService: AddFavoriteArticleGQL,
    private addFavoriteAuthorService: AddFavoriteAuthorGQL,
    private addFavoriteDealService: AddFavoriteDealGQL,
    private addFavoriteEventService: AddFavoriteEventGQL,
    private addFavoriteOrganisationService: AddFavoriteOrganisationGQL,
    private dialog: MatDialog,
    private getMeService: GetMeGQL,
    private feedbackService: FeedbackService,
    private removeFavoriteArticleService: RemoveFavoriteArticleGQL,
    private removeFavoriteAuthorService: RemoveFavoriteAuthorGQL,
    private removeFavoriteEventService: RemoveFavoriteEventGQL,
    private removeFavoriteDealService: RemoveFavoriteDealGQL,
    private removeFavoriteOrganisationService: RemoveFavoriteOrganisationGQL,
    private router: Router,
    private store: Store,
    private translationService: TranslationService,
  ) { }
}
