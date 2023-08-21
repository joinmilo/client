import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map, switchMap, withLatestFrom } from 'rxjs';
import { selectParams } from './survey-portal-overview.selectors';
import { DealAdminOverviewActions } from './survey-admin-overview.actions';
import { GetDealsGQL, PageableList_DealEntity } from 'src/schema/schema';

@Injectable()
export class DealAdminOverviewEffects {

  updateParams = createEffect(() => this.actions.pipe(
    ofType(DealAdminOverviewActions.updateParams),
    withLatestFrom(this.store.select(selectParams)),
    switchMap(([, params]) => this.getDeals.watch({
      params,
    }).valueChanges),
    map(response => DealAdminOverviewActions.setOverviewData(response.data.getDeals as PageableList_DealEntity))
  ));

  constructor(
    private actions: Actions,
    private getDeals: GetDealsGQL,
    private store: Store,
  ) {}
}
