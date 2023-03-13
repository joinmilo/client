import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType, OnInitEffects } from '@ngrx/effects';

import { filter, map, switchMap, tap } from 'rxjs/operators';
import { GetLabelsGQL, GetServerVersionGQL, GetThemeGQL, LabelEntity, SaveLabelGQL, ThemeEntity } from 'src/schema/schema';
import { FeedbackService } from '../services/feedback.service';
import { CoreActions } from './core.actions';

import { Action } from '@ngrx/store';

@Injectable()
export class CoreEffects implements OnInitEffects {
  
  ngrxOnInitEffects(): Action {
    return CoreActions.init();
  }

  getLabels = createEffect(() => this.actions.pipe(
    ofType(CoreActions.init),
    switchMap(() => this.getLabelsService.watch().valueChanges),
    filter(response => !!response?.data?.getLabels?.result?.length),
    map(response => CoreActions.setLabels(response.data.getLabels?.result as LabelEntity[]))
  ));

  getServerVersion = createEffect(() => this.actions.pipe(
    ofType(CoreActions.init),
    switchMap(() => this.getServerVersionService.watch().valueChanges),
    filter(response => !!response?.data?.getInformation?.version),
    map(response => CoreActions.setServerVersion(response.data.getInformation))
  ));

  getTheme = createEffect(() => this.actions.pipe(
    ofType(CoreActions.init),
    switchMap(() => this.getThemeService.watch().valueChanges),
    filter(response => !!response?.data?.getThemes?.result?.length),
    map(response => CoreActions.setThemes(response.data.getThemes?.result as ThemeEntity[]))
  ));

  saveLabel = createEffect(() => this.actions.pipe(
    ofType(CoreActions.saveLabel),
    switchMap(action => this.saveLabelService.mutate({
      entity: action.entity
    })),
    map(response => CoreActions.labelSaved(response.data?.saveLabel as LabelEntity))
  ));

  setFeedback = createEffect(() => this.actions.pipe(
    ofType(CoreActions.setFeedback),
    tap(action => this.feedbackService.open(action.feedback)),
  ), { dispatch: false });

  constructor(
    private actions: Actions,
    private feedbackService: FeedbackService,
    private getLabelsService: GetLabelsGQL,
    private getServerVersionService: GetServerVersionGQL,
    private getThemeService: GetThemeGQL,
    private saveLabelService: SaveLabelGQL,) {}
}
