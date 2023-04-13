import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { map, switchMap, tap } from 'rxjs';
import { CoreActions } from 'src/app/core/state/core.actions';
import { FeedbackType } from 'src/app/core/typings/feedback';
import { AppEntity, GetAppsGQL, GetMenuGQL, GetSocialMediaGQL, MenuItemEntity, SaveUserGQL, SocialMediaEntity, UserEntity } from 'src/schema/schema';
import { CommonActions } from './common.actions';

@Injectable()
export class CommonEffects {

  ngrxOnInitEffects(): Action {
    return CommonActions.init();
  }
  

  getApps = createEffect(() => this.actions.pipe(
    ofType(CommonActions.init),
    switchMap(() => this.getAppsService.watch().valueChanges),
    map(response => CommonActions.setApps(response.data.getApps?.result as AppEntity[]))
  ));

  getMenu = createEffect(() => this.actions.pipe(
    ofType(
      CommonActions.init,
      CommonActions.getMenu),
    switchMap(action => this.getMenuService.watch({
      parent: (action as ({ parentId: string })).parentId
    }).valueChanges),
    map(response => CommonActions.setMenu(response.data.getMenuItems?.result as MenuItemEntity[]))
  ));

  getSocialMedia = createEffect(() => this.actions.pipe(
    ofType(CommonActions.init),
    switchMap(() => this.getSocialMediaService.watch().valueChanges),
    map(response => CommonActions.setSocialMedia(response.data.getSocialMedias?.result as SocialMediaEntity[]))
  ));

  navigateDetails = createEffect(() => this.actions.pipe(
    ofType(CommonActions.navigateDetails),
    tap(action => this.router.navigate(['portal', action.feature?.key, action.feature?.id])),
  ), { dispatch: false });

  navigateMenu = createEffect(() => this.actions.pipe(
    ofType(CommonActions.navigateMenu),
    tap(action => {
      if (action?.item?.feature?.key) {
        this.router.navigate(['portal', action.item.feature.key]);
      }

      if (action?.item?.page?.slug) {
        this.router.navigate([`/${action.item.page.slug}`]);
      }
    }),
  ), { dispatch: false });

  notFound = createEffect(() => this.actions.pipe(
    ofType(CommonActions.notFound),
    tap(() => this.router.navigate(['/portal', '404'])),
  ), { dispatch: false });

  saveReport = createEffect(() => this.actions.pipe(
    ofType(CommonActions.saveUser),
    switchMap((action) => this.saveUserService.mutate({
      entity: action.entity
    })),
    map(response => CommonActions.userSaved(response.data?.saveUser as UserEntity))
  ));

  reportSaved = createEffect(() => this.actions.pipe(
    ofType(CommonActions.userSaved),
    map(() => CoreActions.setFeedback({
      type: FeedbackType.Success,
      labelMessage: 'registrationReceived'
    }))
  ));
  
  constructor(
    private actions: Actions,
    private getAppsService: GetAppsGQL,
    private getMenuService: GetMenuGQL,
    private getSocialMediaService: GetSocialMediaGQL,
    private saveUserService: SaveUserGQL,
    private router: Router) { }
}
