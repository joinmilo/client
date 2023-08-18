import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs';
import { GetInfoMediaGQL, PageableList_InfoMediaEntity } from 'src/schema/schema';
import { PortalMediaOverviewActions } from './portal-media-overview.actions';

@Injectable()
export class PortalMediaOverviewEffects {

  updateParams = createEffect(() => this.actions.pipe(
    ofType(PortalMediaOverviewActions.updateParams),
    switchMap((action) => this.infoMediaService.watch({
      params: action.params,
    }).valueChanges),
    map(response => PortalMediaOverviewActions.setOverviewMedia(response.data.getInfoMedia as PageableList_InfoMediaEntity))
  ));

  constructor(
    private actions: Actions,
    private infoMediaService: GetInfoMediaGQL,
  ) {}
}
