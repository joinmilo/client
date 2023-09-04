/* eslint-disable */
import * as Types from '../../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { LanguageFragmentDoc } from '../../../../core/api/generated/language.fragment.generated';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type GetArticlesQueryVariables = Types.Exact<{
  params?: Types.InputMaybe<Types.FilterSortPaginateInput>;
}>;


export type GetArticlesQuery = { __typename?: 'Query', getArticles?: { __typename?: 'PageableList_ArticleEntity', total: any, result?: Array<{ __typename?: 'ArticleEntity', id?: string | null, created?: any | null, modified?: any | null, slug?: string | null, sponsored?: boolean | null, author?: { __typename?: 'UserContextEntity', id?: string | null, user?: { __typename?: 'UserEntity', id?: string | null, firstName?: string | null, lastName?: string | null } | null } | null, category?: { __typename?: 'ArticleCategoryEntity', id?: string | null, icon?: string | null, color?: string | null, translatables?: Array<{ __typename?: 'ArticleCategoryTranslatableEntity', id?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null, translatables?: Array<{ __typename?: 'ArticleTranslatableEntity', id?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null> | null } | null };

export const GetArticlesDocument = gql`
    query getArticles($params: FilterSortPaginateInput) {
  getArticles(params: $params) {
    result {
      id
      created
      modified
      slug
      sponsored
      author {
        id
        user {
          id
          firstName
          lastName
        }
      }
      category {
        id
        icon
        color
        translatables {
          id
          name
          language {
            ...Language
          }
        }
      }
      translatables {
        id
        name
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
  export class GetArticlesGQL extends Apollo.Query<GetArticlesQuery, GetArticlesQueryVariables> {
    override document = GetArticlesDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }