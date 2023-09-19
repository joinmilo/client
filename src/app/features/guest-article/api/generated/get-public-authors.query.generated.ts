/* eslint-disable */
import * as Types from '../../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type GetArticlePublicAuthorsQueryVariables = Types.Exact<{
  params?: Types.InputMaybe<Types.FilterSortPaginateInput>;
}>;


export type GetArticlePublicAuthorsQuery = { __typename?: 'Query', getArticlePublicAuthors?: { __typename?: 'PageableList_ArticlePublicAuthorEntity', total: any, result?: Array<{ __typename?: 'ArticlePublicAuthorEntity', id?: string | null, email?: string | null, name?: string | null, phone?: string | null, articles?: Array<{ __typename?: 'ArticleEntity', id?: string | null } | null> | null } | null> | null } | null };

export const GetArticlePublicAuthorsDocument = gql`
    query getArticlePublicAuthors($params: FilterSortPaginateInput) {
  getArticlePublicAuthors(params: $params) {
    result {
      id
      email
      name
      phone
      articles {
        id
      }
    }
    total
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetArticlePublicAuthorsGQL extends Apollo.Query<GetArticlePublicAuthorsQuery, GetArticlePublicAuthorsQueryVariables> {
    override document = GetArticlePublicAuthorsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }