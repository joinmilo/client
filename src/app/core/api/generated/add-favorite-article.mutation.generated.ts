/* eslint-disable */
import * as Types from './schema';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type AddFavoriteArticleMutationVariables = Types.Exact<{
  articleId?: Types.InputMaybe<Types.Scalars['String']['input']>;
}>;


export type AddFavoriteArticleMutation = { __typename?: 'Mutation', addFavoriteArticle?: { __typename?: 'UserContextEntity', id?: string | null } | null };

export const AddFavoriteArticleDocument = gql`
    mutation addFavoriteArticle($articleId: String) {
  addFavoriteArticle(articleId: $articleId) {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class AddFavoriteArticleGQL extends Apollo.Mutation<AddFavoriteArticleMutation, AddFavoriteArticleMutationVariables> {
    override document = AddFavoriteArticleDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }