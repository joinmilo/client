/* eslint-disable */
import * as Types from '../../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type GetArticleCategoryQueryVariables = Types.Exact<{
  entity?: Types.InputMaybe<Types.ArticleCategoryEntityInput>;
}>;


export type GetArticleCategoryQuery = { __typename?: 'Query', getArticleCategory?: { __typename?: 'ArticleCategoryEntity', id?: string | null, name?: string | null, icon?: string | null, color?: string | null } | null };

export const GetArticleCategoryDocument = gql`
    query getArticleCategory($entity: ArticleCategoryEntityInput) {
  getArticleCategory(entity: $entity) {
    id
    name
    icon
    color
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetArticleCategoryGQL extends Apollo.Query<GetArticleCategoryQuery, GetArticleCategoryQueryVariables> {
    override document = GetArticleCategoryDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }