import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs';
import { AdminActions } from 'src/app/admin/state/admin.actions';
import { ContestEntity } from 'src/app/core/api/generated/schema';
import { GetContestDetailsLayoutGQL } from 'src/app/features/contest/api/generated/get-contest-details-layout.query.generated';
import { ContestAdminDetailsLayoutActions } from './contest-admin-details-layout.actions';

@Injectable()
export class ContestAdminDetailsLayoutEffects {

  getDetails = createEffect(() => this.actions.pipe(
    ofType(ContestAdminDetailsLayoutActions.getDetails),
    switchMap((action) => this.getContestService.watch({
      entity: {
        slug: action.slug
      }
    }).valueChanges),
    map(response => response.data.getContest?.id
      ? ContestAdminDetailsLayoutActions.setDetails(response.data.getContest as ContestEntity)
      : AdminActions.notFound())
  ));

  constructor(
    private actions: Actions,
    private getContestService: GetContestDetailsLayoutGQL,
  ) {}
}
