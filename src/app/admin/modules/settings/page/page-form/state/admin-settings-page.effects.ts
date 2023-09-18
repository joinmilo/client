import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap, tap } from 'rxjs';
import { SavePageGQL } from 'src/app/admin/api/generated/save-page.mutation.generated';
import { PageEntity } from 'src/app/core/api/generated/schema';
import { adminUrl } from 'src/app/core/constants/module.constants';
import { CoreActions } from 'src/app/core/state/actions/core.actions';
import { FeedbackType } from 'src/app/core/typings/feedback';
import { AdminSettingsPageActions } from './admin-settings-page.actions';



@Injectable()
export class AdminSettingsPageEffects {

  savePage = createEffect(() => this.actions.pipe(
    ofType(AdminSettingsPageActions.savePage),
    switchMap((entity) => this.savePageService.mutate(
      entity
    )),
    map(response => AdminSettingsPageActions.pageSaved(response.data?.savePage as PageEntity))
  ));

  PageSaved = createEffect(() =>
    this.actions.pipe(
      ofType(AdminSettingsPageActions.pageSaved),
      tap(() => this.router.navigate(['/', adminUrl, 'settings', 'pages', 'overview'])),
      map(() => CoreActions.setFeedback({ type: FeedbackType.Success, labelMessage: 'pageSaved' }))
    )
  );
  
  constructor(
    private savePageService: SavePageGQL,
    private actions: Actions,
    private router: Router) { 
  }
}
