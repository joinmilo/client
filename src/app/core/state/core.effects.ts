import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType, OnInitEffects } from '@ngrx/effects';

import { filter, map, switchMap, tap } from 'rxjs/operators';
import { ConfigurationEntity, GetConfigurationsGQL, GetLabelsGQL, GetLanguagesGQL, GetServerVersionGQL, GetThemeGQL, LabelEntity, LanguageEntity, ThemeEntity } from 'src/schema/schema';
import { FeedbackService } from '../services/feedback.service';
import { CoreActions } from './core.actions';

import { Router } from '@angular/router';
import { Action } from '@ngrx/store';
import { AuthService } from '../services/auth.service';
import { FeedbackType } from '../typings/feedback';

@Injectable()
export class CoreEffects implements OnInitEffects {

  ngrxOnInitEffects(): Action {
    return CoreActions.init();
  }
  
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
    tap(() => this.router.navigate([''])), //TODO: Route to admin or user portal
    map(() => CoreActions.setFeedback({
      type: FeedbackType.Success,
      labelMessage: 'youreLoggedIn'
    }))
  ));

  refreshExpired = createEffect(() => this.actions.pipe(
    ofType(CoreActions.refreshExpired),
    tap(() => this.router.navigate([''])),
    tap(() => this.authService.clear()),
  ), { dispatch: false });

  constructor(
    private actions: Actions,
    private authService: AuthService,
    private feedbackService: FeedbackService,
    private getLabelsService: GetLabelsGQL,
    private getLanguagesService: GetLanguagesGQL,
    private getServerVersionService: GetServerVersionGQL,
    private getThemeService: GetThemeGQL,
    private getCofigurationsService: GetConfigurationsGQL,
    private router: Router,) { }
}
