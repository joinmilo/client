import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap, tap } from 'rxjs';
import { contestsFeatureKey } from 'src/app/core/constants/feature.constants';
import { adminUrl } from 'src/app/core/constants/module.constants';
import { CoreActions } from 'src/app/core/state/actions/core.actions';
import { FeedbackType } from 'src/app/core/typings/feedback';
import { GetContestTypeGQL } from '../../../api/generated/get-contest-type.query.generated';
import { SaveContestTypeGQL } from '../../../api/generated/save-contest-type.mutation.generated';
import { ContestAdminTypeFormActions } from './contest-admin-type-form.actions';


@Injectable()
export class ContestAdminTypeFormEffects {

  cancelled = createEffect(() => this.actions.pipe(
    ofType(ContestAdminTypeFormActions.cancelled),
    tap(() => this.router.navigate([adminUrl, contestsFeatureKey, 'types'])),
  ), { dispatch: false });


  save = createEffect(() => this.actions.pipe(
    ofType(ContestAdminTypeFormActions.save),
    switchMap(action => this.saveContestTypeService.mutate({
      entity: action.category
    })),
    map(() => ContestAdminTypeFormActions.saved())
  ));

  saved = createEffect(() => this.actions.pipe(
    ofType(ContestAdminTypeFormActions.saved),
    tap(() => this.router.navigate([adminUrl, contestsFeatureKey])),
    map(() => CoreActions.setFeedback({
      type: FeedbackType.Success,
      labelMessage: 'savedSuccessfully'
    }))
  ));

  getType = createEffect(() => this.actions.pipe(
    ofType(ContestAdminTypeFormActions.getCategory),
    switchMap(action => this.getContestTypeService.watch({
      entity: { id: action.entityId }
    }).valueChanges),
    map(response => ContestAdminTypeFormActions.categoryRetrieved(response.data.getContestType))
  ));

  constructor(
    private actions: Actions,
    private saveContestTypeService: SaveContestTypeGQL,
    private getContestTypeService: GetContestTypeGQL,
    private router: Router
  ) {}
}
