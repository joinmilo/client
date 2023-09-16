/* eslint-disable */
import * as Types from '../../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type GetFavoritingUsersQueryVariables = Types.Exact<{
  params?: Types.InputMaybe<Types.FilterSortPaginateInput>;
}>;


export type GetFavoritingUsersQuery = { __typename?: 'Query', getUserContexts?: { __typename?: 'PageableList_UserContextEntity', total: any, result?: Array<{ __typename?: 'UserContextEntity', id?: string | null, user?: { __typename?: 'UserEntity', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null } | null } | null> | null } | null };

export const GetFavoritingUsersDocument = gql`
    query getFavoritingUsers($params: FilterSortPaginateInput) {
  getUserContexts(params: $params) {
    result {
      id
      user {
        id
        firstName
        lastName
        email
      }
    }
    total
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetFavoritingUsersGQL extends Apollo.Query<GetFavoritingUsersQuery, GetFavoritingUsersQueryVariables> {
    override document = GetFavoritingUsersDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }