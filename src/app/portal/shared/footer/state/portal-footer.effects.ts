import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { map, switchMap } from 'rxjs';
import { AppEntity, GetAppsGQL, GetSocialMediaGQL, SocialMediaEntity } from 'src/schema/schema';
import { PortalFooterActions } from './portal-footer.actions';

@Injectable()
export class PortalFooterEffects {

  ngrxOnInitEffects(): Action {
    return PortalFooterActions.init();
  }
  
  getApps = createEffect(() => this.actions.pipe(
    ofType(PortalFooterActions.init),
    switchMap(() => this.getAppsService.watch().valueChanges),
    map(response => PortalFooterActions.setApps(response.data.getApps?.result as AppEntity[]))
  ));

  getSocialMedia = createEffect(() => this.actions.pipe(
    ofType(PortalFooterActions.init),
    switchMap(() => this.getSocialMediaService.watch().valueChanges),
    map(response => PortalFooterActions.setSocialMedia(response.data.getSocialMedias?.result as SocialMediaEntity[]))
  ));

  constructor(
    private actions: Actions,
    private getAppsService: GetAppsGQL,
    private getSocialMediaService: GetSocialMediaGQL,
  ) { }
}
