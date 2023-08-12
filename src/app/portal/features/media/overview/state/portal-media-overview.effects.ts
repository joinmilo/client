import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap, withLatestFrom } from 'rxjs';
import { GetInfoMediaGQL, PageableList_InfoMediaEntity } from 'src/schema/schema';
import { PortalMediaOverviewActions } from './portal-media-overview.actions';
import { PortalMainActions } from 'src/app/portal/main/state/portal-main.actions';
import { Store } from '@ngrx/store';
import { selectParams } from './portal-media-overview.selectors';

@Injectable()
export class PortalMediaOverviewEffects {

  getInfoMedia = createEffect(() => this.actions.pipe(
    ofType(PortalMediaOverviewActions.getOverviewMedia),
    switchMap(() => this.infoMediaService.watch().valueChanges),
    map(response => PortalMediaOverviewActions.setOverviewMedia(
      response.data.getInfoMedia as PageableList_InfoMediaEntity
    ))
  ));

  updateParams = createEffect(() => this.actions.pipe(
    ofType(PortalMediaOverviewActions.updateParams),
    withLatestFrom(this.store.select(selectParams)),
    switchMap(([, params]) => this.infoMediaService.watch({
      params,
    }).valueChanges),
    map(response => PortalMediaOverviewActions.setOverviewMedia(response.data.getInfoMedia as PageableList_InfoMediaEntity))
  ));

  constructor(
    private actions: Actions,
    private infoMediaService: GetInfoMediaGQL,
    private store: Store,
  ) {}
}
