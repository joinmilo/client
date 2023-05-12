import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs';
import { GetUserContextsGQL, QueryOperator, UserContextEntity } from 'src/schema/schema';
import { PortalAuthorOverviewActions } from './portal-author-overview.actions';

@Injectable()
export class AuthorEffects {

  getAuthors = createEffect(() => this.actions.pipe(
    ofType(PortalAuthorOverviewActions.getRecentAuthors),
    switchMap(() => this.getAuthorsService.watch({ 
      params:{
        expression:{
          entity: { 
            operator: QueryOperator.NotEqual, 
            path: "articles", 
            value: null }},
        sort: "modified",
        dir: "desc"
    } 
    }).valueChanges),
    map(response => PortalAuthorOverviewActions.setRecentAuthors(response.data.getUserContexts?.result as UserContextEntity[]))
  ));
  
  constructor(
    private actions: Actions,
    private getAuthorsService: GetUserContextsGQL,
  ) {}
}
