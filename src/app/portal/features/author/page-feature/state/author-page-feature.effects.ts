import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs';
import { GetUserContextsGQL, UserContextEntity } from 'src/schema/schema';
import { AuthorPageFeatureActions } from './author-page-feature.actions';

@Injectable()
export class AuthorPageFeatureEffects {

  getRecentAuthors = createEffect(() => this.actions.pipe(
    ofType(AuthorPageFeatureActions.getRecentAuthors),
    switchMap(() => this.getAuthorsService.watch({
      params: {
        sort: 'created',
        dir: 'desc',
        size: 10,
      }
     }).valueChanges),
    map(response => AuthorPageFeatureActions.setRecentAuthors(response.data.getUserContexts?.result as UserContextEntity[]))
  ));

  constructor(
    private actions: Actions,
    private getAuthorsService: GetUserContextsGQL,
  ) {}
}
