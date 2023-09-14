import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs';
import { AdminActions } from 'src/app/admin/state/admin.actions';
import { ContestEntity } from 'src/app/core/api/generated/schema';
import { GetContestDetailsGQL } from 'src/app/features/contest/api/generated/get-contest-details.query.generated';
import { ContestAdminDetailsLandingActions } from './contest-admin-details-landing.actions';

@Injectable()
export class ContestAdminDetailsLandingEffects {

  getDetails = createEffect(() => this.actions.pipe(
    ofType(ContestAdminDetailsLandingActions.getDetails),
    switchMap((action) => this.getContestService.watch({
      entity: {
        slug: action.slug
      }
    }).valueChanges),
    map(response => response.data.getContest?.id
      ? ContestAdminDetailsLandingActions.setDetails(response.data.getContest as ContestEntity)
      : AdminActions.notFound())
  ));

  constructor(
    private actions: Actions,
    private getContestService: GetContestDetailsGQL,
  ) {}
}
