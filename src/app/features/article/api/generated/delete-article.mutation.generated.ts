/* eslint-disable */
import * as Types from '../../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type DeleteArticleMutationVariables = Types.Exact<{
  id?: Types.InputMaybe<Types.Scalars['String']['input']>;
}>;


export type DeleteArticleMutation = { __typename?: 'Mutation', deleteArticle?: boolean | null };

export const DeleteArticleDocument = gql`
    mutation deleteArticle($id: String) {
  deleteArticle(id: $id)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteArticleGQL extends Apollo.Mutation<DeleteArticleMutation, DeleteArticleMutationVariables> {
    override document = DeleteArticleDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }