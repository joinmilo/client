import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { EMPTY, map, of, switchMap, withLatestFrom } from 'rxjs';
import { DeleteLanguageGQL } from 'src/app/admin/api/generated/delete-laguage.mutation.generated';
import { GetLanguagesGQL } from 'src/app/admin/api/generated/get-languages.query.generated';
import { PageableList_LanguageEntity } from 'src/app/core/api/generated/schema';
import { CoreActions } from 'src/app/core/state/actions/core.actions';
import { FeedbackType } from 'src/app/core/typings/feedback';
import { ConfirmDialogService } from 'src/app/shared/confirmDialog/dialog-confirm.service';
import { ConfirmDialogType } from 'src/app/shared/confirmDialog/typings/confirm-dialog';
import { AdminSettingsLanguageActions } from './admin-settings-language.actions';
import { selectParams } from './admin-settings-language.selectors';

@Injectable()
export class AdminSettingsLanguageEffects {

  updateParams = createEffect(() => this.actions.pipe(
    ofType(
      AdminSettingsLanguageActions.updateParams,
      AdminSettingsLanguageActions.languageDeleted
      ),
    withLatestFrom(this.store.select(selectParams)),
    switchMap(([, params]) => this.getLanguageesService.watch({
      params,
    }).valueChanges),
    map(response => AdminSettingsLanguageActions.setOverviewData(response.data.getLanguages as PageableList_LanguageEntity))
  ));

  deleteLanguage = createEffect(() => this.actions.pipe(
    ofType(AdminSettingsLanguageActions.deleteLanguage),
    switchMap(action => this.confirmDialogService
      .confirm({ type: ConfirmDialogType.Delete, context: action.language?.name }).pipe(
        switchMap(confirmed => confirmed
          ? of(action.language)
          : EMPTY
        )
      )
    ),
    switchMap(language => this.deleteLanguageService.mutate({
      id: language?.id
    })),
    map(() => AdminSettingsLanguageActions.languageDeleted())
  ));

  languageDeleted = createEffect(() => this.actions.pipe(
    ofType(AdminSettingsLanguageActions.languageDeleted),
    map(() => CoreActions.setFeedback({
      type: FeedbackType.Success,
      labelMessage: 'deletedSuccessfully'
    }))
  ));

  constructor(
    private actions: Actions,
    private dialog: MatDialog,
    private deleteLanguageService: DeleteLanguageGQL,
    private getLanguageesService: GetLanguagesGQL,
    private store: Store,
    private confirmDialogService: ConfirmDialogService
  ) {}
}
