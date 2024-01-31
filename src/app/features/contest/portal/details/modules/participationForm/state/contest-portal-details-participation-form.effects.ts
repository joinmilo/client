import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { EMPTY, map, of, switchMap, tap, withLatestFrom } from 'rxjs';
import { ContestParticipationEntity } from 'src/app/core/api/generated/schema';
import { contestsFeatureKey } from 'src/app/core/constants/feature.constants';
import { portalUrl, userUrl } from 'src/app/core/constants/module.constants';
import { selectCurrentUser } from 'src/app/core/state/selectors/user.selectors';
import { SaveContestParticipationGQL } from 'src/app/features/contest/api/generated/save-contest-participation.mutation.generated';
import { ConfirmService } from 'src/app/shared/confirm/service/confirm.service';
import { ContestPortalDetailsParticipationFormActions } from './contest-portal-details-participation-form.actions';

@Injectable()
export class ContestPortalDetailsParticipationFormEffects {
  saveParticipation = createEffect(() =>
    this.actions.pipe(
      ofType(ContestPortalDetailsParticipationFormActions.saveParticipation),
      withLatestFrom(this.store.select(selectCurrentUser)),
      switchMap(([action, user]) =>
        this.confirmDialogService
          .confirm({
            buttonColor: 'primary',
            buttonLabel: 'confirm',
            titleLabel: 'saveVote',
            messageLabel: 'areYouSureToVote',
            context:
              (action.entity.contest?.maxParticipations ?? 0) ===
              (user?.contestPariticpations?.filter(
                (participation) =>
                  participation?.contest?.id == action.entity.contest?.id
              ).length ?? 0) +
                1
                ? 'lastParticipation'
                : (action.entity.contest?.maxParticipations ?? 0) ===
                  (user?.contestPariticpations?.filter(
                    (participation) =>
                      participation?.contest?.id == action.entity.contest?.id
                  ).length ?? 0)
                ? 'equalParticipations'
                : 'moreParticipations',
          })
          .pipe(
            switchMap((confirmed) => (confirmed ? of(action.entity) : EMPTY))
          )
      ),
      switchMap((participation) =>
        this.saveContestParticipationService.mutate({
          entity: participation,
        })
      ),
      map((response) =>
        ContestPortalDetailsParticipationFormActions.participationSaved(
          response.data?.saveContestParticipation as ContestParticipationEntity
        )
      )
    )
  );

  participationSaved = createEffect(
    () =>
      this.actions.pipe(
        ofType(ContestPortalDetailsParticipationFormActions.participationSaved),
        tap(() =>
          this.router.navigate(['/', userUrl, 'participate', 'success-contest'])
        )
      ),
    { dispatch: false }
  );

  cancelled = createEffect(
    () =>
      this.actions.pipe(
        ofType(ContestPortalDetailsParticipationFormActions.cancelled),
        tap(() => this.router.navigate([portalUrl, contestsFeatureKey]))
      ),
    { dispatch: false }
  );

  constructor(
    private actions: Actions,
    private confirmDialogService: ConfirmService,
    private saveContestParticipationService: SaveContestParticipationGQL,
    private store: Store,
    private router: Router
  ) {}
}
