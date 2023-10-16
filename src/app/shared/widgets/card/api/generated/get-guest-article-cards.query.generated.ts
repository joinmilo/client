/* eslint-disable */
import * as Types from '../../../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { GuestArticleCardFragmentDoc } from './guest-article-card.fragment.generated';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type GetGuestArticleCardsQueryVariables = Types.Exact<{
  params?: Types.InputMaybe<Types.FilterSortPaginateInput>;
}>;


export type GetGuestArticleCardsQuery = { __typename?: 'Query', getArticles?: { __typename?: 'PageableList_ArticleEntity', total: any, result?: Array<{ __typename?: 'ArticleEntity', id?: string | null, created?: any | null, modified?: any | null, slug?: string | null, category?: { __typename?: 'ArticleCategoryEntity', id?: string | null, color?: string | null, icon?: string | null, translatables?: Array<{ __typename?: 'ArticleCategoryTranslatableEntity', id?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null, uploads?: Array<{ __typename?: 'ArticleMediaEntity', id?: string | null, title?: boolean | null, card?: boolean | null, media?: { __typename?: 'MediaEntity', id?: string | null, created?: any | null, extension?: string | null, mimeType?: string | null, modified?: any | null, name?: string | null, size?: any | null, url?: string | null, base64?: string | null, attribution?: { __typename?: 'MediaAttributionEntity', id?: string | null, title?: string | null, author?: string | null, source?: string | null, license?: string | null } | null } | null } | null> | null, publicAuthor?: { __typename?: 'ArticlePublicAuthorEntity', id?: string | null, name?: string | null, email?: string | null, phone?: string | null } | null, translatables?: Array<{ __typename?: 'ArticleTranslatableEntity', id?: string | null, content?: string | null, shortDescription?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null> | null } | null };

export const GetGuestArticleCardsDocument = gql`
    query getGuestArticleCards($params: FilterSortPaginateInput) {
  getArticles(params: $params) {
    result {
      ...GuestArticleCard
    }
    total
  }
}
    ${GuestArticleCardFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetGuestArticleCardsGQL extends Apollo.Query<GetGuestArticleCardsQuery, GetGuestArticleCardsQueryVariables> {
    override document = GetGuestArticleCardsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }