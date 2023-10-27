/* eslint-disable */
import * as Types from '../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { MediaFragmentDoc } from '../../../core/api/generated/media.fragment.generated';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type GetUserContextsQueryVariables = Types.Exact<{
  params?: Types.InputMaybe<Types.FilterSortPaginateInput>;
}>;


export type GetUserContextsQuery = { __typename?: 'Query', getUserContexts?: { __typename?: 'PageableList_UserContextEntity', result?: Array<{ __typename?: 'UserContextEntity', id?: string | null, user?: { __typename?: 'UserEntity', id?: string | null, firstName?: string | null, lastName?: string | null } | null, uploads?: Array<{ __typename?: 'UserContextMediaEntity', id?: string | null, profilePicture?: boolean | null, title?: boolean | null, media?: { __typename?: 'MediaEntity', id?: string | null, created?: any | null, extension?: string | null, mimeType?: string | null, modified?: any | null, name?: string | null, size?: any | null, url?: string | null, base64?: string | null, attribution?: { __typename?: 'MediaAttributionEntity', id?: string | null, title?: string | null, author?: string | null, source?: string | null, license?: string | null } | null } | null } | null> | null } | null> | null } | null };

export const GetUserContextsDocument = gql`
    query getUserContexts($params: FilterSortPaginateInput) {
  getUserContexts(params: $params) {
    result {
      id
      user {
        id
        firstName
        lastName
      }
      uploads {
        id
        profilePicture
        title
        media {
          ...Media
        }
      }
    }
  }
}
    ${MediaFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetUserContextsGQL extends Apollo.Query<GetUserContextsQuery, GetUserContextsQueryVariables> {
    override document = GetUserContextsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }