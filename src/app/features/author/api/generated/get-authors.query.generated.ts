/* eslint-disable */
import * as Types from '../../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type GetUserContextsQueryVariables = Types.Exact<{
  params?: Types.InputMaybe<Types.FilterSortPaginateInput>;
}>;


export type GetUserContextsQuery = { __typename?: 'Query', getUserContexts?: { __typename?: 'PageableList_UserContextEntity', total: any, result?: Array<{ __typename?: 'UserContextEntity', id?: string | null, created?: any | null, modified?: any | null, slug?: string | null, user?: { __typename?: 'UserEntity', id?: string | null, email?: string | null, firstName?: string | null, lastName?: string | null, lastLogin?: any | null } | null, articles?: Array<{ __typename?: 'ArticleEntity', id?: string | null } | null> | null } | null> | null } | null };

export const GetUserContextsDocument = gql`
    query getUserContexts($params: FilterSortPaginateInput) {
  getUserContexts(params: $params) {
    result {
      id
      created
      modified
      slug
      user {
        id
        email
        firstName
        lastName
        lastLogin
      }
      articles {
        id
      }
    }
    total
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetUserContextsGQL extends Apollo.Query<GetUserContextsQuery, GetUserContextsQueryVariables> {
    override document = GetUserContextsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }