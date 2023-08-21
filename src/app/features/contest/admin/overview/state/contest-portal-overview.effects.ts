import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map, switchMap, withLatestFrom } from 'rxjs';
import { selectParams } from './contest-portal-overview.selectors';
import { ContestAdminOverviewActions } from './contest-admin-overview.actions';
import { GetContestsGQL, PageableList_ContestEntity } from 'src/schema/schema';

@Injectable()
export class ContestAdminOverviewEffects {

  updateParams = createEffect(() => this.actions.pipe(
    ofType(ContestAdminOverviewActions.updateParams),
    withLatestFrom(this.store.select(selectParams)),
    switchMap(([, params]) => this.getContest.watch({
      params,
    }).valueChanges),
    map(response => ContestAdminOverviewActions.setOverviewData(response.data.getContests as PageableList_ContestEntity))
  ));

  constructor(
    private actions: Actions,
    private getContest: GetContestsGQL,
    private store: Store,
  ) {}
}
