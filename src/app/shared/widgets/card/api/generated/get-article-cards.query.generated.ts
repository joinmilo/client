/* eslint-disable */
import * as Types from '../../../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { ArticleCardFragmentDoc } from './article-card.fragment.generated';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type GetArticleCardsQueryVariables = Types.Exact<{
  params?: Types.InputMaybe<Types.FilterSortPaginateInput>;
}>;


export type GetArticleCardsQuery = { __typename?: 'Query', getArticles?: { __typename?: 'PageableList_ArticleEntity', total: any, result?: Array<{ __typename?: 'ArticleEntity', id?: string | null, created?: any | null, modified?: any | null, slug?: string | null, author?: { __typename?: 'UserContextEntity', id?: string | null, uploads?: Array<{ __typename?: 'UserContextMediaEntity', id?: string | null, profilePicture?: boolean | null, media?: { __typename?: 'MediaEntity', id?: string | null, created?: any | null, extension?: string | null, mimeType?: string | null, modified?: any | null, name?: string | null, size?: any | null, url?: string | null, attribution?: { __typename?: 'MediaAttributionEntity', id?: string | null, title?: string | null, author?: string | null, source?: string | null, license?: string | null } | null } | null } | null> | null, user?: { __typename?: 'UserEntity', id?: string | null, firstName?: string | null, lastName?: string | null } | null } | null, category?: { __typename?: 'ArticleCategoryEntity', id?: string | null, color?: string | null, icon?: string | null, translatables?: Array<{ __typename?: 'ArticleCategoryTranslatableEntity', id?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, name?: string | null, locale?: string | null } | null } | null> | null } | null, uploads?: Array<{ __typename?: 'ArticleMediaEntity', id?: string | null, title?: boolean | null, card?: boolean | null, media?: { __typename?: 'MediaEntity', id?: string | null, created?: any | null, extension?: string | null, mimeType?: string | null, modified?: any | null, name?: string | null, size?: any | null, url?: string | null, attribution?: { __typename?: 'MediaAttributionEntity', id?: string | null, title?: string | null, author?: string | null, source?: string | null, license?: string | null } | null } | null } | null> | null, publicAuthor?: { __typename?: 'ArticlePublicAuthorEntity', id?: string | null, name?: string | null, email?: string | null, phone?: string | null } | null, translatables?: Array<{ __typename?: 'ArticleTranslatableEntity', id?: string | null, content?: string | null, shortDescription?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null> | null } | null };

export const GetArticleCardsDocument = gql`
    query getArticleCards($params: FilterSortPaginateInput) {
  getArticles(params: $params) {
    result {
      ...ArticleCard
    }
    total
  }
}
    ${ArticleCardFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetArticleCardsGQL extends Apollo.Query<GetArticleCardsQuery, GetArticleCardsQueryVariables> {
    override document = GetArticleCardsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }