/* eslint-disable */
import * as Types from '../../../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { ContestCardFragmentDoc } from './contest-card.fragment.generated';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type GetContestCardsQueryVariables = Types.Exact<{
  params?: Types.InputMaybe<Types.FilterSortPaginateInput>;
}>;


export type GetContestCardsQuery = { __typename?: 'Query', getContests?: { __typename?: 'PageableList_ContestEntity', total: any, result?: Array<{ __typename?: 'ContestEntity', id?: string | null, created?: any | null, modified?: any | null, slug?: string | null, participationEndDate?: any | null, voteEndDate?: any | null, uploads?: Array<{ __typename?: 'ContestMediaEntity', title?: boolean | null, card?: boolean | null, media?: { __typename?: 'MediaEntity', id?: string | null, created?: any | null, extension?: string | null, mimeType?: string | null, modified?: any | null, name?: string | null, size?: any | null, url?: string | null, base64?: string | null, attribution?: { __typename?: 'MediaAttributionEntity', id?: string | null, title?: string | null, author?: string | null, source?: string | null, license?: string | null } | null } | null } | null> | null, type?: { __typename?: 'ContestTypeEntity', id?: string | null, translatables?: Array<{ __typename?: 'ContestTypeTranslatableEntity', id?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null, translatables?: Array<{ __typename?: 'ContestTranslatableEntity', id?: string | null, name?: string | null, content?: string | null, shortDescription?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null, contact?: { __typename?: 'ContactEntity', id?: string | null, email?: string | null, name?: string | null, phone?: string | null, preferredContact?: boolean | null, website?: string | null } | null } | null> | null } | null };

export const GetContestCardsDocument = gql`
    query getContestCards($params: FilterSortPaginateInput) {
  getContests(params: $params) {
    result {
      ...ContestCard
    }
    total
  }
}
    ${ContestCardFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetContestCardsGQL extends Apollo.Query<GetContestCardsQuery, GetContestCardsQueryVariables> {
    override document = GetContestCardsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }