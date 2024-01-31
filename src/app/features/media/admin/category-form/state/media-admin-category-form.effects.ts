import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { FeedbackType } from 'ngx-cinlib/modals/feedback';
import { map, switchMap, tap } from 'rxjs';
import { mediaFeatureKey } from 'src/app/core/constants/feature.constants';
import { adminUrl } from 'src/app/core/constants/module.constants';
import { CoreActions } from 'src/app/core/state/actions/core.actions';
import { GetInfoMediaCategoryGQL } from '../../../api/generated/get-info-media-category.query.generated';
import { SaveInfoMediaCategoryGQL } from '../../../api/generated/save-info-media-category.mutation.generated';
import { MediaAdminCategoryFormActions } from './media-admin-category-form.actions';

@Injectable()
export class MediaAdminCategoryFormEffects {

  cancelled = createEffect(() => this.actions.pipe(
    ofType(MediaAdminCategoryFormActions.cancelled),
    tap(() => this.router.navigate([adminUrl, mediaFeatureKey, 'category'])),
  ), { dispatch: false });


  save = createEffect(() => this.actions.pipe(
    ofType(MediaAdminCategoryFormActions.save),
    switchMap(action => this.saveInfoMediaCategoryService.mutate({
      entity: action.category
    })),
    map(() => MediaAdminCategoryFormActions.saved())
  ));

  saved = createEffect(() => this.actions.pipe(
    ofType(MediaAdminCategoryFormActions.saved),
    tap(() => this.router.navigate([adminUrl, mediaFeatureKey])),
    map(() => CoreActions.setFeedback({
      type: FeedbackType.Success,
      labelMessage: 'savedSuccessfully'
    }))
  ));

  getCategory = createEffect(() => this.actions.pipe(
    ofType(MediaAdminCategoryFormActions.getCategory),
    switchMap(action => this.getInfoMediaCategoryService.watch({
      entity: { id: action.entityId }
    }).valueChanges),
    map(response => MediaAdminCategoryFormActions.categoryRetrieved(response.data.getInfoMediaCategory))
  ));

  constructor(
    private actions: Actions,
    private saveInfoMediaCategoryService: SaveInfoMediaCategoryGQL,
    private getInfoMediaCategoryService: GetInfoMediaCategoryGQL,
    private router: Router
  ) {}
}
