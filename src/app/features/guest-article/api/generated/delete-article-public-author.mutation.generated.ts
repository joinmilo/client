/* eslint-disable */
import * as Types from '../../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type DeleteArticlePublicAuthorMutationVariables = Types.Exact<{
  id?: Types.InputMaybe<Types.Scalars['String']>;
}>;


export type DeleteArticlePublicAuthorMutation = { __typename?: 'Mutation', deleteArticlePublicAuthor?: boolean | null };

export const DeleteArticlePublicAuthorDocument = gql`
    mutation deleteArticlePublicAuthor($id: String) {
  deleteArticlePublicAuthor(id: $id)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteArticlePublicAuthorGQL extends Apollo.Mutation<DeleteArticlePublicAuthorMutation, DeleteArticlePublicAuthorMutationVariables> {
    override document = DeleteArticlePublicAuthorDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }