import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { map, switchMap, tap } from 'rxjs';
import { InfoMediaCategoryEntity } from 'src/app/core/api/generated/schema';
import { mediaFeatureKey } from 'src/app/core/constants/feature.constants';
import { adminUrl } from 'src/app/core/constants/module.constants';
import { CoreActions } from 'src/app/core/state/actions/core.actions';
import { FeedbackType } from 'src/app/core/typings/feedback';
import { GetMediaCategoriesGQL } from '../../../api/generated/get-media-categories.query.generated';
import { SaveInfoMediumGQL } from '../../../api/generated/save-media.mutation.generated';
import { MediaAdminFormActions } from './media-admin-form.actions';

@Injectable()
export class MediaAdminFormEffects {

  save = createEffect(() => this.actions.pipe(
    ofType(MediaAdminFormActions.save),
    switchMap(action => this.saveMediaService.mutate({
      entity: action.media
    })),
    map(() => MediaAdminFormActions.saved())
  ));

  saved = createEffect(() => this.actions.pipe(
    ofType(MediaAdminFormActions.saved),
    tap(() => this.router.navigate([adminUrl, mediaFeatureKey])),
    map(() => CoreActions.setFeedback({
      type: FeedbackType.Success,
      labelMessage: 'savedSuccessfully'
    }))
  ));

  getCategories = createEffect(() => this.actions.pipe(
    ofType(MediaAdminFormActions.getCategories),
    switchMap(() => this.getCategoriesService.watch().valueChanges),
    map(response => MediaAdminFormActions.setCategories(response.data.getInfoMediaCategories?.result as InfoMediaCategoryEntity[]))
  ));

  constructor(
    private actions: Actions,
    private saveMediaService: SaveInfoMediumGQL,
    private getCategoriesService: GetMediaCategoriesGQL,
    private router: Router
  ) {}
}
