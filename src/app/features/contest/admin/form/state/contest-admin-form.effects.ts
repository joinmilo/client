import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap, tap } from 'rxjs';
import { ContestEntity, ContestTypeEntity } from 'src/app/core/api/generated/schema';
import { contestsFeatureKey } from 'src/app/core/constants/feature.constants';
import { adminUrl } from 'src/app/core/constants/module.constants';
import { CoreActions } from 'src/app/core/state/actions/core.actions';
import { FeedbackType } from 'src/app/core/typings/feedback';
import { GetContestFormGQL } from '../../../api/generated/get-contest-form.query.generated';
import { GetContestTypesGQL } from '../../../api/generated/get-contest-types.query.generated';
import { SaveContestGQL } from '../../../api/generated/save-contest.mutation.generated';
import { ContestAdminFormActions } from './contest-admin-form.actions';

@Injectable()
export class ContestAdminFormEffects {
  
  getContest = createEffect(() => this.actions.pipe(
    ofType(ContestAdminFormActions.getContest),
    switchMap(action => this.getContentService.watch({
      entity: { slug: action.slug }
    }).valueChanges),
    map(response => ContestAdminFormActions.contestRetrieved(response.data.getContest as ContestEntity))
  ));

  getTypes = createEffect(() => this.actions.pipe(
    ofType(ContestAdminFormActions.getTypes),
    switchMap(() => this.getContestTypesService.watch().valueChanges),
    map(response => ContestAdminFormActions.setTypes(response.data.getContestTypes?.result as ContestTypeEntity[]))
  ));

  cancelled = createEffect(() => this.actions.pipe(
    ofType(ContestAdminFormActions.cancelled),
    tap(() => this.router.navigate([adminUrl, contestsFeatureKey])),
  ), { dispatch: false });


  save = createEffect(() => this.actions.pipe(
    ofType(ContestAdminFormActions.save),
    switchMap(action => this.saveContestService.mutate({
      entity: action.contest
    })),
    map(() => ContestAdminFormActions.saved())
  ));

  saved = createEffect(() => this.actions.pipe(
    ofType(ContestAdminFormActions.saved),
    tap(() => this.router.navigate([adminUrl, contestsFeatureKey])),
    map(() => CoreActions.setFeedback({
      type: FeedbackType.Success,
      labelMessage: 'savedSuccessfully'
    }))
  ));

  constructor(
    private actions: Actions,
    private getContentService: GetContestFormGQL,
    private getContestTypesService: GetContestTypesGQL,
    private router: Router,
    private saveContestService: SaveContestGQL
  ) {}
}
