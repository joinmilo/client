import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType, OnInitEffects } from '@ngrx/effects';

import { filter, map, switchMap, tap } from 'rxjs/operators';
import { ConfigurationEntity, GetConfigurationsGQL, GetLabelsGQL, GetLanguagesGQL, GetMeGQL, GetNotificationsGQL, GetServerVersionGQL, GetThemeGQL, LabelEntity, LanguageEntity, NotificationEntity, SaveNotificationsGQL, ThemeEntity, UserContextEntity } from 'src/schema/schema';
import { FeedbackService } from '../services/feedback.service';
import { CoreActions } from './core.actions';

import { Router } from '@angular/router';
import { Action, Store } from '@ngrx/store';
import { refreshKey } from '../constants/core.constants';
import { AuthService } from '../services/auth.service';
import { FeedbackType } from '../typings/feedback';

@Injectable()
export class CoreEffects implements OnInitEffects {

  ngrxOnInitEffects(): Action {
    return CoreActions.init();
  }

  getCurrentUser = createEffect(() => this.actions.pipe(
    ofType(CoreActions.init),
    filter(() => !!localStorage.getItem(refreshKey)),
    switchMap(() => this.getMeService.watch().valueChanges),
    filter(response => !!response.data.me?.id),
    map(response => CoreActions.getMe(response.data.me as UserContextEntity))
  ));
  
  getConfigurations = createEffect(() => this.actions.pipe(
    ofType(CoreActions.init),
    switchMap(() => this.getCofigurationsService.watch().valueChanges),
    filter(response => !!response.data.getConfigurations?.result?.length),
    map(response => CoreActions.setConfigurations(response.data.getConfigurations?.result as ConfigurationEntity[]))
  ));

  getLabels = createEffect(() => this.actions.pipe(
    ofType(CoreActions.init),
    switchMap(() => this.getLabelsService.watch().valueChanges),
    filter(response => !!response?.data?.getLabels?.result?.length),
    map(response => CoreActions.setLabels(response.data.getLabels?.result as LabelEntity[]))
  ));

  getLanguages = createEffect(() => this.actions.pipe(
    ofType(CoreActions.init),
    switchMap(() => this.getLanguagesService.watch().valueChanges),
    filter(response => !!response?.data?.getLanguages?.result?.length),
    map(response => CoreActions.setLanguages(response.data.getLanguages?.result as LanguageEntity[]))
  ));

  getNotifications = createEffect(() => this.actions.pipe(
    ofType(CoreActions.init),
    switchMap(() => this.getNotificationsService.watch().valueChanges),
    filter(response =>!!response?.data?.getNotifications?.result?.length),
    map(response => CoreActions.setNotifications(response.data.getNotifications?.result as NotificationEntity[]))
  ));

  getServerVersion = createEffect(() => this.actions.pipe(
    ofType(CoreActions.init),
    switchMap(() => this.getServerVersionService.watch().valueChanges),
    filter(response => !!response?.data?.getInformation?.version),
    map(response => CoreActions.setServerVersion(response.data.getInformation))
  ));

  getTheme = createEffect(() => this.actions.pipe(
    ofType(CoreActions.init),
    switchMap(() => this.getThemeService.watch().valueChanges),
    filter(response => !!response?.data?.getThemes?.result?.length),
    map(response => CoreActions.setThemes(response.data.getThemes?.result as ThemeEntity[]))
  ));

  setFeedback = createEffect(() => this.actions.pipe(
    ofType(CoreActions.setFeedback),
    tap(action => this.feedbackService.open(action.feedback)),
  ), { dispatch: false });

  login = createEffect(() => this.actions.pipe(
    ofType(CoreActions.login),
    filter(action => !!action.email && !!action.password),
    switchMap((action) => this.authService.login(
      action.email,
      action.password
    )),
    filter(tokens => !!tokens),
    map(() => CoreActions.loggedIn())
  ));

  loggedIn = createEffect(() => this.actions.pipe(
    ofType(CoreActions.loggedIn),
    switchMap(() => this.getMeService.watch().valueChanges),
    filter(response => !!response.data.me?.id),
    map(response => CoreActions.getMe(response.data.me as UserContextEntity)),
    tap(() => this.feedbackService.open({
      type: FeedbackType.Success,
      labelMessage: 'youreLoggedIn'
    })),
    tap(() => this.router.navigate([''])), //TODO: Route to admin or user portal
  ));

  logout = createEffect(() => this.actions.pipe(
    ofType(CoreActions.logout),
    map(() => CoreActions.setFeedback({
      type: FeedbackType.Success,
      labelMessage: 'youreLoggedOut'
    }))
  ));

  refreshExpiredOrLogout = createEffect(() => this.actions.pipe(
    ofType(
      CoreActions.refreshExpired,
      CoreActions.logout
    ),
    tap(() => this.router.navigate([''])),
    tap(() => this.authService.clear()),
  ), { dispatch: false });

  constructor(
    private store: Store,
    private actions: Actions,
    private authService: AuthService,
    private feedbackService: FeedbackService,
    private getCofigurationsService: GetConfigurationsGQL,
    private getLabelsService: GetLabelsGQL,
    private getLanguagesService: GetLanguagesGQL,
    private getMeService: GetMeGQL,
    private getNotificationsService: GetNotificationsGQL,
    private getServerVersionService: GetServerVersionGQL,
    private getThemeService: GetThemeGQL,
    private router: Router,
    private saveNotificationsService: SaveNotificationsGQL,
    ) { }
}
