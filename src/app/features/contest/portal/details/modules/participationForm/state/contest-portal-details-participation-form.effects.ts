import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { EMPTY, map, of, switchMap, withLatestFrom } from 'rxjs';
import { ContestParticipationEntity } from 'src/app/core/api/generated/schema';
import { CoreActions } from 'src/app/core/state/actions/core.actions';
import { selectCurrentUser } from 'src/app/core/state/selectors/user.selectors';
import { FeedbackType } from 'src/app/core/typings/feedback';
import { SaveContestParticipationGQL } from 'src/app/features/contest/api/generated/save-contest-participation.mutation.generated';
import { ConfirmChangeComponent } from 'src/app/shared/dialogs/confirm-change/confirm-change.component';
import { ContestPortalDetailsParticipationFormActions } from './contest-portal-details-participation-form.actions';

@Injectable()
export class ContestPortalDetailsParticipationFormEffects {

  saveParticipation = createEffect(() => this.actions.pipe(
    ofType(ContestPortalDetailsParticipationFormActions.saveParticipation),
    withLatestFrom(this.store.select(selectCurrentUser)),
    switchMap(([action, user]) => this.dialog.open(ConfirmChangeComponent, { data: user?.contestPariticpations })
    .afterClosed().pipe(
        switchMap(confirmed => confirmed
          ? of(action.entity)
          : EMPTY
        )
      )
    ),
    switchMap(participation => this.saveContestParticipationService.mutate(
      {
        entity: participation
      }
    )),
    map((response) => ContestPortalDetailsParticipationFormActions.participationSaved(response.data?.saveContestParticipation as ContestParticipationEntity))
  ));

  participationSaved = createEffect(() => this.actions.pipe(
    ofType(ContestPortalDetailsParticipationFormActions.participationSaved),
    map(() => CoreActions.setFeedback({
      type: FeedbackType.Success,
      labelMessage: 'participationSaved'
    }))
  ));

  constructor(
    private actions: Actions,
    private saveContestParticipationService: SaveContestParticipationGQL,
    private dialog: MatDialog,
    private store: Store
  ) { }
}
