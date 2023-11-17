import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map, switchMap, withLatestFrom } from 'rxjs';
import { PageableList_UserContextEntity, QueryOperator } from 'src/app/core/api/generated/schema';
import { GetUserContextsGQL } from '../../../api/generated/get-authors.query.generated';
import { AuthorAdminOverviewActions } from './author-admin-overview.actions';
import { selectParams } from './author-admin-overview.selectors';

@Injectable()
export class AuthorAdminOverviewEffects {

  updateParams = createEffect(() => this.actions.pipe(
    ofType(
      AuthorAdminOverviewActions.updateParams,
      ),
    withLatestFrom(this.store.select(selectParams)),
    switchMap(([, params]) => this.getAuthorsService.watch({
      params:{
        ...params,
        expression:{
          entity:{
            path: 'articles.author.id',
            operator: QueryOperator.NotEqual,
            value: null
          }
        }
      }
      
    }).valueChanges),
    map(response => AuthorAdminOverviewActions.setOverviewData(response.data.getUserContexts as PageableList_UserContextEntity))
  ));
  
  constructor(
    private actions: Actions,
    private getAuthorsService: GetUserContextsGQL,
    private store: Store,
  ) {}
}
