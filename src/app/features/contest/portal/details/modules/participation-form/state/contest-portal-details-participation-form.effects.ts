import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { ConfirmService } from 'ngx-cinlib/modals/confirm';
import { EMPTY, map, of, switchMap, tap, withLatestFrom } from 'rxjs';
import { ContestEntity, ContestParticipationEntity } from 'src/app/core/api/generated/schema';
import { contestsFeatureKey } from 'src/app/core/constants/feature.constants';
import { portalUrl, userUrl } from 'src/app/core/constants/module.constants';
import { CoreUserActions } from 'src/app/core/state/actions/core-user.actions';
import { GetContestParticipationFormGQL } from 'src/app/features/contest/api/generated/get-contest-participation-form.query.generated';
import { SaveContestParticipationGQL } from 'src/app/features/contest/api/generated/save-contest-participation.mutation.generated';
import { PortalActions } from 'src/app/portal/state/portal.actions';
import { ContestPortalDetailsParticipationFormActions } from './contest-portal-details-participation-form.actions';
import { selectContestDetails, selectSlug, selectUserPartipations } from './contest-portal-details-participation-form.selectors';

@Injectable()
export class ContestPortalDetailsParticipationFormEffects {

  getDetails = createEffect(() => this.actions.pipe(
    ofType(ContestPortalDetailsParticipationFormActions.getDetails),
    switchMap((action) => this.getContestService.watch({ 
        entity: { slug: action.slug }
      }).valueChanges
    ),
    map(response => response.data.getContest?.id
      ? ContestPortalDetailsParticipationFormActions.setDetails(response.data.getContest as ContestEntity)
      : PortalActions.notFound())
  ));

  updateDetails = createEffect(() => this.actions.pipe(
    ofType(ContestPortalDetailsParticipationFormActions.participationSaved),
    withLatestFrom(this.store.select(selectSlug)),
    switchMap(([, slug]) => this.getContestService.watch({
        entity: { slug: slug }
      }).valueChanges
    ),
    map(response => response.data.getContest?.id
      ? ContestPortalDetailsParticipationFormActions.setDetails(response.data.getContest as ContestEntity)
      : PortalActions.notFound())
  ));


  saveParticipation = createEffect(() =>
    this.actions.pipe(
      ofType(ContestPortalDetailsParticipationFormActions.saveParticipation),
      withLatestFrom(
        this.store.select(selectUserPartipations),
        this.store.select(selectContestDetails)),
      switchMap(([action, userParticipations, contest]) =>
        this.confirmDialogService
          .confirm({
            buttonColor: 'primary',
            buttonLabel: 'confirm',
            titleLabel: 'confirmParticipation',
            messageLabel: 'areYouSureToParticipate',
            context:
              contest?.maxParticipations 
                ? contest?.maxParticipations == (userParticipations + 1)
                  ? 'lastParticipation'
                  : contest?.maxParticipations == userParticipations || contest?.maxParticipations < userParticipations
                    ? 'equalParticipations'
                    : 'moreParticipations'
                : 'moreParticipations' 
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

  participationSaved = createEffect(() => this.actions.pipe(
    ofType(ContestPortalDetailsParticipationFormActions.participationSaved),
    tap(() => this.router.navigate(['/', userUrl, 'participate', 'success-contest']))
  ), { dispatch: false });

  updateUser = createEffect(() => this.actions.pipe(
    ofType(ContestPortalDetailsParticipationFormActions.participationSaved),
    map(() => CoreUserActions.updateUser())
  ));  

  cancelled = createEffect(() => this.actions.pipe(
    ofType(ContestPortalDetailsParticipationFormActions.cancelled),
    tap(() => this.router.navigate([portalUrl, contestsFeatureKey]))
  ), { dispatch: false });

  constructor(
    private actions: Actions,
    private confirmDialogService: ConfirmService,
    private saveContestParticipationService: SaveContestParticipationGQL,
    private store: Store,
    private router: Router,
    private getContestService: GetContestParticipationFormGQL
  ) {}
}
