/* eslint-disable */
import * as Types from './schema';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type RemoveFavoriteArticleMutationVariables = Types.Exact<{
  articleId?: Types.InputMaybe<Types.Scalars['String']['input']>;
}>;


export type RemoveFavoriteArticleMutation = { __typename?: 'Mutation', removeFavoriteArticle?: { __typename?: 'UserContextEntity', id?: string | null } | null };

export const RemoveFavoriteArticleDocument = gql`
    mutation removeFavoriteArticle($articleId: String) {
  removeFavoriteArticle(articleId: $articleId) {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class RemoveFavoriteArticleGQL extends Apollo.Mutation<RemoveFavoriteArticleMutation, RemoveFavoriteArticleMutationVariables> {
    override document = RemoveFavoriteArticleDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }