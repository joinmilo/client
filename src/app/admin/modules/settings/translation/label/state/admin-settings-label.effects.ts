import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { FeedbackType } from 'ngx-cinlib/modals/feedback';
import { debounceTime, filter, map, switchMap, tap } from 'rxjs';
import { SaveLabelGQL } from 'src/app/admin/api/generated/save-label.mutation.generated';
import { GetLabelsGQL } from 'src/app/core/api/generated/get-labels.query.generated';
import { LabelEntityInput, PageableList_LabelEntity } from 'src/app/core/api/generated/schema';
import { CoreActions } from 'src/app/core/state/actions/core.actions';
import { AdminSettingsLabelActions } from './admin-settings-label.actions';

@Injectable()
export class AdminSettingsLabelEffects {

  updateParams = createEffect(() => this.actions.pipe(
    ofType(
      AdminSettingsLabelActions.updateParams,
    ),
    switchMap(action => this.getLabelsService.watch({
      params: action.params,
    }).valueChanges),
    map(response => AdminSettingsLabelActions.setOverviewData(response.data.getLabels as PageableList_LabelEntity))
  ));

  saveLabel = createEffect(() => this.actions.pipe(
    ofType(AdminSettingsLabelActions.saveLabel),
    map(action => ({ 
      id: action.label?.id,
      content: action.label?.content
    }) as LabelEntityInput),
    switchMap(entity => this.saveLabelService.mutate({
      entity
    })),
    filter(response => !!response?.data?.saveLabel?.id),
    map(() => AdminSettingsLabelActions.labelSaved())
  ));

  labelSaved = createEffect(() => this.actions.pipe(
    ofType(AdminSettingsLabelActions.labelSaved),
    map(() => CoreActions.setFeedback({
      type: FeedbackType.Success,
      labelMessage: 'dataSavedPageReloaded'
    }))
  ));

  reloadPage = createEffect(() => this.actions.pipe(
    ofType(AdminSettingsLabelActions.labelSaved),
    debounceTime(4000),
    tap(() => window.location.reload())
  ), { dispatch: false });

  constructor(
    private actions: Actions,
    private getLabelsService: GetLabelsGQL,
    private saveLabelService: SaveLabelGQL,
  ) {}
}
