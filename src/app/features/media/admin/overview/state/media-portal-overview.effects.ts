import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map, switchMap, withLatestFrom } from 'rxjs';
import { selectParams } from './media-portal-overview.selectors';
import { GetInfoMediaGQL, PageableList_InfoMediaEntity } from 'src/schema/schema';
import { MediaAdminOverviewActions } from './media-admin-overview.actions';

@Injectable()
export class MediaAdminOverviewEffects {

  updateParams = createEffect(() => this.actions.pipe(
    ofType(MediaAdminOverviewActions.updateParams),
    withLatestFrom(this.store.select(selectParams)),
    switchMap(([, params]) => this.getInfoMedia.watch({
      params,
    }).valueChanges),
    map(response => MediaAdminOverviewActions.setOverviewData(response.data.getInfoMedia as PageableList_InfoMediaEntity))
  ));

  constructor(
    private actions: Actions,
    private getInfoMedia: GetInfoMediaGQL,
    private store: Store,
  ) {}
}
