/* eslint-disable */
import * as Types from '../../../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { AuthorCardFragmentDoc } from './author-card.fragment.generated';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type GetAuthorCardsQueryVariables = Types.Exact<{
  params?: Types.InputMaybe<Types.FilterSortPaginateInput>;
}>;


export type GetAuthorCardsQuery = { __typename?: 'Query', getUserContexts?: { __typename?: 'PageableList_UserContextEntity', result?: Array<{ __typename?: 'UserContextEntity', id?: string | null, user?: { __typename?: 'UserEntity', id?: string | null, email?: string | null, firstName?: string | null, lastName?: string | null, phone?: string | null } | null, uploads?: Array<{ __typename?: 'UserContextMediaEntity', id?: string | null, profilePicture?: boolean | null, media?: { __typename?: 'MediaEntity', id?: string | null, created?: any | null, extension?: string | null, mimeType?: string | null, modified?: any | null, name?: string | null, size?: any | null, url?: string | null, attribution?: { __typename?: 'MediaAttributionEntity', id?: string | null, title?: string | null, author?: string | null, source?: string | null, license?: string | null } | null } | null } | null> | null } | null> | null } | null };

export const GetAuthorCardsDocument = gql`
    query getAuthorCards($params: FilterSortPaginateInput) {
  getUserContexts(params: $params) {
    result {
      ...AuthorCard
    }
  }
}
    ${AuthorCardFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetAuthorCardsGQL extends Apollo.Query<GetAuthorCardsQuery, GetAuthorCardsQueryVariables> {
    override document = GetAuthorCardsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }