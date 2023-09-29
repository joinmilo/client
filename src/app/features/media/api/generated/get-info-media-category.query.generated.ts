/* eslint-disable */
import * as Types from '../../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type GetInfoMediaCategoryQueryVariables = Types.Exact<{
  entity?: Types.InputMaybe<Types.InfoMediaCategoryEntityInput>;
}>;


export type GetInfoMediaCategoryQuery = { __typename?: 'Query', getInfoMediaCategory?: { __typename?: 'InfoMediaCategoryEntity', id?: string | null, name?: string | null } | null };

export const GetInfoMediaCategoryDocument = gql`
    query getInfoMediaCategory($entity: InfoMediaCategoryEntityInput) {
  getInfoMediaCategory(entity: $entity) {
    id
    name
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetInfoMediaCategoryGQL extends Apollo.Query<GetInfoMediaCategoryQuery, GetInfoMediaCategoryQueryVariables> {
    override document = GetInfoMediaCategoryDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }