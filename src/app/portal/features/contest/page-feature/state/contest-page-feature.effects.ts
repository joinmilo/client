import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs';
import { ContestEntity, GetContestsGQL } from 'src/schema/schema';
import { ContestPageFeatureActions } from './contest-page-feature.actions';

@Injectable()
export class ContestPageFeatureEffects {

  getRecentContests = createEffect(() => this.actions.pipe(
    ofType(ContestPageFeatureActions.getRecentContests),
    switchMap(() => this.getContestsService.watch({
      params: {
        sort: 'modified',
        dir: 'desc',
        size: 10,
      }
     }).valueChanges),
    map(response => ContestPageFeatureActions.setRecentContests(response.data.getContests?.result as ContestEntity[]))
  ));

  constructor(
    private actions: Actions,
    private getContestsService: GetContestsGQL,
  ) {}
}
