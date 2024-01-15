import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { EMPTY, map, of, switchMap, withLatestFrom } from 'rxjs';
import { AssignLandingPageGQL } from 'src/app/admin/api/generated/assign-landing.mutation.generated';
import { DeletePageGQL } from 'src/app/admin/api/generated/delete-page.mutation.generated';
import { GetPagesGQL } from 'src/app/admin/api/generated/get-pages.query.generated';
import { PageableList_PageEntity } from 'src/app/core/api/generated/schema';
import { CoreActions } from 'src/app/core/state/actions/core.actions';
import { FeedbackType } from 'src/app/core/typings/feedback';
import { ConfirmService } from 'src/app/shared/confirm/service/confirm.service';
import { ConfirmType } from 'src/app/shared/confirm/typings/confirm';
import { AdminSettingsPageActions } from './admin-settings-pages.actions';
import { selectParams } from './admin-settings-pages.selectors';

@Injectable()
export class AdminSettingsPageEffects {

  updateParams = createEffect(() => this.actions.pipe(
    ofType(
      AdminSettingsPageActions.updateParams,
      AdminSettingsPageActions.pageDeleted,
      AdminSettingsPageActions.landingAssigned
      ),
    withLatestFrom(this.store.select(selectParams)),
    switchMap(([, params]) => this.getPagesService.watch({
      params,
    }).valueChanges),
    map(response => AdminSettingsPageActions.setOverviewData(response.data.getPages as PageableList_PageEntity))
  ));

  assignLanding = createEffect(() => this.actions.pipe(
    ofType(AdminSettingsPageActions.assignLanding),
    switchMap(action => this.confirmService
      .confirm({ type: ConfirmType.Change, context: 'thisWillAssignLandingPage' }).pipe(
        switchMap(confirmed => confirmed
          ? of(action.pageId)
          : EMPTY
        )
      )
    ),
    switchMap(pageId => this.assignLandingPageService.mutate({
      pageId,
    })),
    map(() => AdminSettingsPageActions.landingAssigned())
  ));

  landingAssigned = createEffect(() => this.actions.pipe(
    ofType(AdminSettingsPageActions.landingAssigned),
    map(() => CoreActions.setFeedback({
      type: FeedbackType.Success,
      labelMessage: 'changedSuccessfully'
    }))
  ));

  deletePage = createEffect(() => this.actions.pipe(
    ofType(AdminSettingsPageActions.deletePage),
    switchMap(action => this.confirmService
      .confirm({ type: ConfirmType.Delete, context: action.page?.label }).pipe(
        switchMap(confirmed => confirmed
          ? of(action.page)
          : EMPTY
        )
      )
    ),
    switchMap(page => this.deletePageService.mutate({
      id: page?.id
    })),
    map(() => AdminSettingsPageActions.pageDeleted())
  ));

  pageDeleted = createEffect(() => this.actions.pipe(
    ofType(AdminSettingsPageActions.pageDeleted),
    map(() => CoreActions.setFeedback({
      type: FeedbackType.Success,
      labelMessage: 'deletedSuccessfully'
    }))
  ));

  constructor(
    private actions: Actions,
    private assignLandingPageService: AssignLandingPageGQL,
    private confirmService: ConfirmService,
    private deletePageService: DeletePageGQL,
    private getPagesService: GetPagesGQL,
    private store: Store,
  ) {}
}
