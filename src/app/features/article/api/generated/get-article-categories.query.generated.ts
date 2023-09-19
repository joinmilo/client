/* eslint-disable */
import * as Types from '../../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type GetArticleCategoriesQueryVariables = Types.Exact<{
  params?: Types.InputMaybe<Types.FilterSortPaginateInput>;
}>;


export type GetArticleCategoriesQuery = { __typename?: 'Query', getArticleCategories?: { __typename?: 'PageableList_ArticleCategoryEntity', total: any, result?: Array<{ __typename?: 'ArticleCategoryEntity', id?: string | null, color?: string | null, icon?: string | null, translatables?: Array<{ __typename?: 'ArticleCategoryTranslatableEntity', id?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null> | null } | null };

export const GetArticleCategoriesDocument = gql`
    query getArticleCategories($params: FilterSortPaginateInput) {
  getArticleCategories(params: $params) {
    result {
      id
      color
      icon
      translatables {
        id
        name
        language {
          id
          locale
          name
        }
      }
    }
    total
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetArticleCategoriesGQL extends Apollo.Query<GetArticleCategoriesQuery, GetArticleCategoriesQueryVariables> {
    override document = GetArticleCategoriesDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }