import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { filter, map, switchMap, tap } from 'rxjs/operators';
import { GetMeGQL, UserContextEntity } from 'src/schema/schema';
import { FeedbackService } from '../../services/feedback.service';
import { CoreActions } from '../actions/core.actions';

import { Router } from '@angular/router';
import { Action, Store } from '@ngrx/store';
import { accountUrl, refreshKey } from '../../constants/core.constants';
import { AuthService } from '../../services/auth.service';
import { FeedbackType } from '../../typings/feedback';
import { CoreUserActions } from '../actions/core-user.actions';

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
  ) );

  logout = createEffect(() => this.actions.pipe(
    ofType(CoreUserActions.logout),
    map(() => CoreActions.setFeedback({
      type: FeedbackType.Success,
      labelMessage: 'youreLoggedOut'
    }))
  ));

  refreshExpiredOrLogout = createEffect(() => this.actions.pipe(
    ofType(
      CoreUserActions.refreshExpired,
      CoreUserActions.logout
    ),
    tap(() => this.router.navigate([''])),
    tap(() => this.authService.clear()),
  ), { dispatch: false });

  requireLogin = createEffect(() => this.actions.pipe(
    ofType(CoreUserActions.requireLogin),
    tap(() => this.router.navigate([`/${accountUrl}`, 'login-required'])),
  ), { dispatch: false });

  constructor(
    private actions: Actions,
    private authService: AuthService,
    private feedbackService: FeedbackService,
    private getMeService: GetMeGQL,
    private router: Router,
    private store: Store
    ) { }
}
