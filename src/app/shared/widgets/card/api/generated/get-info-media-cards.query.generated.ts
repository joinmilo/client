/* eslint-disable */
import * as Types from '../../../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { InfoMediaCardFragmentDoc } from './info-media-card.fragment.generated';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type GetInfoMediaCardsQueryVariables = Types.Exact<{
  params?: Types.InputMaybe<Types.FilterSortPaginateInput>;
}>;


export type GetInfoMediaCardsQuery = { __typename?: 'Query', getInfoMedia?: { __typename?: 'PageableList_InfoMediaEntity', total: any, result?: Array<{ __typename?: 'InfoMediaEntity', id?: string | null, category?: { __typename?: 'InfoMediaCategoryEntity', id?: string | null, translatables?: Array<{ __typename?: 'InfoMediaCategoryTranslatableEntity', id?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null, media?: { __typename?: 'MediaEntity', id?: string | null, created?: any | null, extension?: string | null, mimeType?: string | null, modified?: any | null, name?: string | null, size?: any | null, url?: string | null, base64?: string | null, attribution?: { __typename?: 'MediaAttributionEntity', id?: string | null, title?: string | null, author?: string | null, source?: string | null, license?: string | null } | null } | null } | null> | null } | null };

export const GetInfoMediaCardsDocument = gql`
    query getInfoMediaCards($params: FilterSortPaginateInput) {
  getInfoMedia(params: $params) {
    result {
      ...InfoMediaCard
    }
    total
  }
}
    ${InfoMediaCardFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetInfoMediaCardsGQL extends Apollo.Query<GetInfoMediaCardsQuery, GetInfoMediaCardsQueryVariables> {
    override document = GetInfoMediaCardsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }