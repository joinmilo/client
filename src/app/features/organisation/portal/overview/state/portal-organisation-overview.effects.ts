import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map, switchMap, withLatestFrom } from 'rxjs';
import { FilterSortPaginateInput, OrganisationEntity, PageableList_OrganisationEntity, QueryExpressionInput, QueryOperator } from 'src/app/core/api/generated/schema';
import { GetOrganisationCardGQL } from 'src/app/shared/widgets/card/api/generated/get-organisation-card.query.generated';
import { GetOrganisationCardsGQL } from 'src/app/shared/widgets/card/api/generated/get-organisation-cards.query.generated';
import { PortalOrganisationOverviewActions } from './portal-organisation-overview.actions';
import { selectParams } from './portal-organisation-overview.selectors';

@Injectable()
export class PortalOrganisationOverviewEffects {

  getSponsoredOrganisation = createEffect(() => this.actions.pipe(
    ofType(PortalOrganisationOverviewActions.getSponsoredOrganisation),
    switchMap(() => this.getOrganisationCardService.watch({ 
      entity: {
        sponsored: true
      }
    }).valueChanges),
    map(response => PortalOrganisationOverviewActions.setSponsoredOrganisation(response.data.getOrganisation as OrganisationEntity))
  ));

  updateParams = createEffect(() => this.actions.pipe(
    ofType(PortalOrganisationOverviewActions.updateParams),
    withLatestFrom(this.store.select(selectParams)),
    map(([,params]) => {
      const organisations = ({
        expression: {
          conjunction: {
            operands: [
              {
                entity: {
                  path: 'approved',
                  operator: QueryOperator.Equal,
                  value: 'true'
                }
              }
            ]
          }
        }
      } as FilterSortPaginateInput)
      organisations?.expression?.conjunction?.operands?.push(params.expression as QueryExpressionInput)
      return {...params, ...organisations} as FilterSortPaginateInput;
    }),
    switchMap((params) => this.getOrganisationCardsService.watch({ params }).valueChanges),
    map(response => PortalOrganisationOverviewActions.setOverviewData(response.data.getOrganisations as PageableList_OrganisationEntity))
  ));

  constructor(
    private actions: Actions,
    private getOrganisationCardService: GetOrganisationCardGQL,
    private getOrganisationCardsService: GetOrganisationCardsGQL,
    private store: Store,
  ) {}
}
