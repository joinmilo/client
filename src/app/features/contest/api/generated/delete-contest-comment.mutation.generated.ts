/* eslint-disable */
import * as Types from '../../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type DeleteContestCommentMutationVariables = Types.Exact<{
  id?: Types.InputMaybe<Types.Scalars['String']['input']>;
}>;


export type DeleteContestCommentMutation = { __typename?: 'Mutation', deleteContestComment?: boolean | null };

export const DeleteContestCommentDocument = gql`
    mutation deleteContestComment($id: String) {
  deleteContestComment(id: $id)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteContestCommentGQL extends Apollo.Mutation<DeleteContestCommentMutation, DeleteContestCommentMutationVariables> {
    override document = DeleteContestCommentDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }