/* eslint-disable */
import * as Types from '../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type GetRolesQueryVariables = Types.Exact<{
  params?: Types.InputMaybe<Types.FilterSortPaginateInput>;
}>;


export type GetRolesQuery = { __typename?: 'Query', getRoles?: { __typename?: 'PageableList_RoleEntity', total: any, result?: Array<{ __typename?: 'RoleEntity', name?: string | null, code?: string | null } | null> | null } | null };

export const GetRolesDocument = gql`
    query getRoles($params: FilterSortPaginateInput) {
  getRoles(params: $params) {
    result {
      name
      code
    }
    total
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetRolesGQL extends Apollo.Query<GetRolesQuery, GetRolesQueryVariables> {
    override document = GetRolesDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }