import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs';
import { GetUserContextsGQL, UserContextEntity } from 'src/schema/schema';
import { FormPageFeatureActions } from './form-page-feature.actions';

@Injectable()
export class FormPageFeatureEffects {

  getRecentForms = createEffect(() => this.actions.pipe(
    ofType(FormPageFeatureActions.getRecentForms),
    switchMap(() => this.getFormsService.watch({
      params: {
        sort: 'modified',
        dir: 'desc',
        size: 10,
      }
     }).valueChanges),
    map(response => FormPageFeatureActions.setRecentForms(response.data.getUserContexts?.result as UserContextEntity[]))
  ));

  constructor(
    private actions: Actions,
    private getFormsService: GetUserContextsGQL,
  ) {}
}

