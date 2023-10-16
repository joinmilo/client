import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap, tap } from 'rxjs';
import { DealCategoryEntity, DealEntity } from 'src/app/core/api/generated/schema';
import { dealsFeatureKey } from 'src/app/core/constants/feature.constants';
import { adminUrl } from 'src/app/core/constants/module.constants';
import { CoreActions } from 'src/app/core/state/actions/core.actions';
import { FeedbackType } from 'src/app/core/typings/feedback';
import { GetDealCategoriesGQL } from '../../../api/generated/get-deal-categories.query.generated';
import { GetDealGQL } from '../../../api/generated/get-deal.query.generated';

import { SaveDealGQL } from '../../../api/generated/save-deal.mutation.generated';
import { DealAdminFormActions } from './deal-admin-form.actions';

@Injectable()
export class DealAdminFormEffects {

  getDeal = createEffect(() => this.actions.pipe(
    ofType(DealAdminFormActions.getDeal),
    switchMap(action => this.getDealService.watch({
      entity: { slug: action.slug }
    }).valueChanges),
    map(response => DealAdminFormActions.setDeal(response.data.getDeal as DealEntity))
  ));

  getCategories = createEffect(() => this.actions.pipe(
    ofType(DealAdminFormActions.getCategories),
    switchMap(() => this.getDealCategoriesService.watch().valueChanges),
    map(response => DealAdminFormActions.setCategories(response.data.getDealCategories?.result as DealCategoryEntity[]))
  ));

  cancelled = createEffect(() => this.actions.pipe(
    ofType(DealAdminFormActions.cancelled),
    tap(() => this.router.navigate([adminUrl, dealsFeatureKey])),
  ), { dispatch: false });

save = createEffect(() => this.actions.pipe(
  ofType(DealAdminFormActions.save),
  switchMap(action => {
    console.log('action.deal:', action.deal); // Add this line to log action.deal
    return this.saveDealService.mutate({
      entity: action.deal
    })
  }),
  map(() => DealAdminFormActions.saved())
));


  saved = createEffect(() => this.actions.pipe(
    ofType(DealAdminFormActions.saved),
    tap(() => this.router.navigate([adminUrl, dealsFeatureKey])),
    map(() => CoreActions.setFeedback({
      type: FeedbackType.Success,
      labelMessage: 'savedSuccessfully'
    }))
  ));
  
  constructor(
    private actions: Actions,
    private getDealService: GetDealGQL,
    private getDealCategoriesService: GetDealCategoriesGQL,
    private router: Router,
    private saveDealService: SaveDealGQL
  ) {}
}
