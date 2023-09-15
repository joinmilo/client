/* eslint-disable */
import * as Types from '../../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type DeleteArticleCommentMutationVariables = Types.Exact<{
  id?: Types.InputMaybe<Types.Scalars['String']>;
}>;


export type DeleteArticleCommentMutation = { __typename?: 'Mutation', deleteArticleComment?: boolean | null };

export const DeleteArticleCommentDocument = gql`
    mutation deleteArticleComment($id: String) {
  deleteArticleComment(id: $id)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteArticleCommentGQL extends Apollo.Mutation<DeleteArticleCommentMutation, DeleteArticleCommentMutationVariables> {
    override document = DeleteArticleCommentDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }