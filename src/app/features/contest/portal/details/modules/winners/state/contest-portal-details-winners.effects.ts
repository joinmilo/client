import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map, switchMap } from 'rxjs';
import {
  ContestParticipationEntity,
  Maybe,
  QueryOperator,
} from 'src/app/core/api/generated/schema';
import { GetContestParticipationsGQL } from 'src/app/features/contest/api/generated/get-contest-participations.query.generated';
import { ContestPortalDetailsWinnersActions } from './contest-portal-details-winners.actions';

@Injectable()
export class ContestPortalDetailsWinnersEffects {
  getContestWinners = createEffect(() =>
    this.actions.pipe(
      ofType(ContestPortalDetailsWinnersActions.getWinners),
      switchMap(
        () =>
          this.getContestParticipationsService.watch({
            params: {
              sort: 'placement',
              dir: 'asc',
              expression: {
                entity: {
                  path: 'placement',
                  operator: QueryOperator.NotEqual,
                  value: null,
                },
              },
            },
          }).valueChanges
      ),
      map((response) =>
        ContestPortalDetailsWinnersActions.setWinners(
          response.data.getContestParticipations?.result as Maybe<ContestParticipationEntity[]>
        )
      )
    )
  );

  constructor(
    private actions: Actions,
    private getContestParticipationsService: GetContestParticipationsGQL,
    private store: Store
  ) {}
}
