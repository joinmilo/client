/* eslint-disable */
import * as Types from '../../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { LanguageFragmentDoc } from '../../../../core/api/generated/language.fragment.generated';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type GetGuestArticlesQueryVariables = Types.Exact<{
  params?: Types.InputMaybe<Types.FilterSortPaginateInput>;
}>;


export type GetGuestArticlesQuery = { __typename?: 'Query', getArticles?: { __typename?: 'PageableList_ArticleEntity', total: any, result?: Array<{ __typename?: 'ArticleEntity', id?: string | null, approved?: boolean | null, created?: any | null, modified?: any | null, slug?: string | null, publicAuthor?: { __typename?: 'ArticlePublicAuthorEntity', id?: string | null, name?: string | null, email?: string | null, phone?: string | null } | null, translatables?: Array<{ __typename?: 'ArticleTranslatableEntity', id?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null> | null } | null };

export const GetGuestArticlesDocument = gql`
    query getGuestArticles($params: FilterSortPaginateInput) {
  getArticles(params: $params) {
    result {
      id
      approved
      created
      modified
      slug
      publicAuthor {
        id
        name
        email
        phone
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
  export class GetGuestArticlesGQL extends Apollo.Query<GetGuestArticlesQuery, GetGuestArticlesQueryVariables> {
    override document = GetGuestArticlesDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }