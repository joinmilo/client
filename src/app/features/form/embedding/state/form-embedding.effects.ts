import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs';
import { GetUserContextsGQL, UserContextEntity } from 'src/schema/schema';
import { FormEmbeddingActions } from './form-embedding.actions';

@Injectable()
export class FormEmbeddingEffects {

  getRecentForms = createEffect(() => this.actions.pipe(
    ofType(FormEmbeddingActions.getRecentForms),
    switchMap(() => this.getFormsService.watch({
      params: {
        sort: 'modified',
        dir: 'desc',
        size: 10,
      }
     }).valueChanges),
    map(response => FormEmbeddingActions.setRecentForms(response.data.getUserContexts?.result as UserContextEntity[]))
  ));

  constructor(
    private actions: Actions,
    private getFormsService: GetUserContextsGQL,
  ) {}
}

