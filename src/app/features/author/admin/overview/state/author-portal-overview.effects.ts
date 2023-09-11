import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map, switchMap, withLatestFrom } from 'rxjs';
import { PageableList_UserContextEntity } from 'src/app/core/api/generated/schema';
import { GetUserContextsGQL } from '../../../api/generated/get-authors.query.generated';
import { AuthorAdminOverviewActions } from './author-admin-overview.actions';
import { selectParams } from './author-portal-overview.selectors';

@Injectable()
export class AuthorAdminOverviewEffects {

  updateParams = createEffect(() => this.actions.pipe(
    ofType(
      AuthorAdminOverviewActions.updateParams,
      ),
    withLatestFrom(this.store.select(selectParams)),
    switchMap(([, params]) => this.getAuthorsService.watch({
      params,
    }).valueChanges),
    map(response => AuthorAdminOverviewActions.setOverviewData(response.data.getUserContexts as PageableList_UserContextEntity))
  ));
  
  constructor(
    private actions: Actions,
    private dialog: MatDialog,
    private getAuthorsService: GetUserContextsGQL,
    private store: Store,
  ) {}
}
