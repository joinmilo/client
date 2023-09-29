/* eslint-disable */
import * as Types from '../../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type GetDealCategoryQueryVariables = Types.Exact<{
  entity?: Types.InputMaybe<Types.DealCategoryEntityInput>;
}>;


export type GetDealCategoryQuery = { __typename?: 'Query', getDealCategory?: { __typename?: 'DealCategoryEntity', id?: string | null, name?: string | null, icon?: string | null, color?: string | null } | null };

export const GetDealCategoryDocument = gql`
    query getDealCategory($entity: DealCategoryEntityInput) {
  getDealCategory(entity: $entity) {
    id
    name
    icon
    color
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetDealCategoryGQL extends Apollo.Query<GetDealCategoryQuery, GetDealCategoryQueryVariables> {
    override document = GetDealCategoryDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }