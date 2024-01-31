import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { FeedbackType } from 'ngx-cinlib/modals/feedback';
import { map, switchMap, tap } from 'rxjs';
import { dealsFeatureKey } from 'src/app/core/constants/feature.constants';
import { adminUrl } from 'src/app/core/constants/module.constants';
import { CoreActions } from 'src/app/core/state/actions/core.actions';
import { GetDealCategoryGQL } from '../../../api/generated/get-deal-category.query.generated';
import { SaveDealCategoryGQL } from '../../../api/generated/save-deal-category.mutation.generated';
import { DealAdminCategoryFormActions } from './deal-admin-category-form.actions';

@Injectable()
export class DealAdminCategoryFormEffects {

  cancelled = createEffect(() => this.actions.pipe(
    ofType(DealAdminCategoryFormActions.cancelled),
    tap(() => this.router.navigate([adminUrl, dealsFeatureKey, 'category'])),
  ), { dispatch: false });


  save = createEffect(() => this.actions.pipe(
    ofType(DealAdminCategoryFormActions.save),
    switchMap(action => this.saveDealCategoryService.mutate({
      entity: action.category
    })),
    map(() => DealAdminCategoryFormActions.saved())
  ));

  saved = createEffect(() => this.actions.pipe(
    ofType(DealAdminCategoryFormActions.saved),
    tap(() => this.router.navigate([adminUrl, dealsFeatureKey])),
    map(() => CoreActions.setFeedback({
      type: FeedbackType.Success,
      labelMessage: 'savedSuccessfully'
    }))
  ));

  getCategory = createEffect(() => this.actions.pipe(
    ofType(DealAdminCategoryFormActions.getCategory),
    switchMap(action => this.getDealCategoryService.watch({
      entity: { id: action.entityId }
    }).valueChanges),
    map(response => DealAdminCategoryFormActions.categoryRetrieved(response.data.getDealCategory))
  ));

  constructor(
    private actions: Actions,
    private saveDealCategoryService: SaveDealCategoryGQL,
    private getDealCategoryService: GetDealCategoryGQL,
    private router: Router
  ) {}
}
