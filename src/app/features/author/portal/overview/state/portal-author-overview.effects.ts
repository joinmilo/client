import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs';
import { PageableList_UserContextEntity, QueryOperator } from 'src/app/core/api/generated/schema';
import { GetAuthorCardsGQL } from 'src/app/shared/widgets/card/api/generated/get-author-cards.query.generated';
import { PortalAuthorOverviewActions } from './portal-author-overview.actions';

@Injectable()
export class PortalAuthorOverviewEffects {

  getAuthors = createEffect(() => this.actions.pipe(
    ofType(PortalAuthorOverviewActions.updateParams),
    switchMap(action => this.getAuthorCardsService.watch({ 
      params: {
        ...action.params, expression: {
          entity: {
            operator: QueryOperator.NotEqual,
            path: 'articles.author.id',
            value: 'null'
          }
        },
      }
    }).valueChanges),
    map(response => PortalAuthorOverviewActions.setOverviewData(response.data.getUserContexts as PageableList_UserContextEntity))
  ));
  
  constructor(
    private actions: Actions,
    private getAuthorCardsService: GetAuthorCardsGQL,
  ) {}
}
