import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs';
import { GetPageDetailsLayoutGQL } from 'src/app/admin/api/generated/get-page-details-layout.query.generated';
import { AdminActions } from 'src/app/admin/state/admin.actions';
import { PageEntity } from 'src/app/core/api/generated/schema';
import { AdminSettingsPageDetailsLayoutActions } from './admin-settings-page-details-layout.actions';

@Injectable()
export class AdminSettingsPageDetailsLayoutEffects {

  getDetails = createEffect(() => this.actions.pipe(
    ofType(AdminSettingsPageDetailsLayoutActions.getDetails),
    switchMap((action) => this.getPageService.watch({
      entity: {
        slug: action.slug
      }
    }).valueChanges),
    map(response => response.data.getPage?.id
      ? AdminSettingsPageDetailsLayoutActions.setDetails(response.data.getPage as PageEntity)
      : AdminActions.notFound())
  ));

  constructor(
    private actions: Actions,
    private getPageService: GetPageDetailsLayoutGQL,
  ) {}
}
