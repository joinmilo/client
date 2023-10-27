import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs';
import { OrganisationEntity, QueryOperator } from 'src/app/core/api/generated/schema';
import { GetOrganisationCardsGQL } from 'src/app/shared/widgets/card/api/generated/get-organisation-cards.query.generated';
import { OrganisationEmbeddingActions } from './organisation-embedding.actions';

@Injectable()
export class OrganisationEmbeddingEffects {

  getRecentOrganisations = createEffect(() => this.actions.pipe(
    ofType(OrganisationEmbeddingActions.getRecentOrganisations),
    switchMap(() => this.getOrganisationCardsService.watch({
      params: {
        sort: 'modified',
        dir: 'desc',
        size: 10,
        expression: {
          conjunction: {
            operands: [
              {
                entity: {
                  path: 'approved',
                  operator: QueryOperator.Equal,
                  value: "true"
                }
              }
            ]
          }
        }
      }
     }).valueChanges),
    map(response => OrganisationEmbeddingActions.setRecentOrganisations(response.data.getOrganisations?.result as OrganisationEntity[]))
  ));

  constructor(
    private actions: Actions,
    private getOrganisationCardsService: GetOrganisationCardsGQL,
  ) {}
}
