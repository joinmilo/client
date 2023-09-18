import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs';
import { GetPageDetailsGQL } from 'src/app/admin/api/generated/get-page-details.query.generated';
import { AdminActions } from 'src/app/admin/state/admin.actions';
import { PageEntity } from 'src/app/core/api/generated/schema';
import { AdminSettingsPageDetailsLandingActions } from './admin-settings-page-details-landing.actions';

@Injectable()
export class AdminSettingsPageDetailsLandingEffects {

  getDetails = createEffect(() => this.actions.pipe(
    ofType(AdminSettingsPageDetailsLandingActions.getDetails),
    switchMap((action) => this.getPageService.watch({
      entity: {
        slug: action.slug
      }
    }).valueChanges),
    map(response => response.data.getPage?.id
      ? AdminSettingsPageDetailsLandingActions.setDetails(response.data.getPage as PageEntity)
      : AdminActions.notFound())
  ));

  constructor(
    private actions: Actions,
    private getPageService: GetPageDetailsGQL,
  ) {}
}
