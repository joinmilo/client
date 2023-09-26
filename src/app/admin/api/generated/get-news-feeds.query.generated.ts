/* eslint-disable */
import * as Types from '../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { LanguageFragmentDoc } from '../../../core/api/generated/language.fragment.generated';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type GetNewsFeedsQueryVariables = Types.Exact<{
  params?: Types.InputMaybe<Types.FilterSortPaginateInput>;
}>;


export type GetNewsFeedsQuery = { __typename?: 'Query', getNewsFeeds?: { __typename?: 'PageableList_NewsFeedEntity', total: any, result?: Array<{ __typename?: 'NewsFeedEntity', id?: string | null, translatables?: Array<{ __typename?: 'NewsFeedTranslatableEntity', id?: string | null, content?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null> | null } | null };

export const GetNewsFeedsDocument = gql`
    query getNewsFeeds($params: FilterSortPaginateInput) {
  getNewsFeeds(params: $params) {
    result {
      id
      translatables {
        id
        content
        language {
          ...Language
        }
      }
    }
    total
  }
}
    ${LanguageFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetNewsFeedsGQL extends Apollo.Query<GetNewsFeedsQuery, GetNewsFeedsQueryVariables> {
    override document = GetNewsFeedsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }