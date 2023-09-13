/* eslint-disable */
import * as Types from '../../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type DeleteEventCommentMutationVariables = Types.Exact<{
  id?: Types.InputMaybe<Types.Scalars['String']>;
}>;


export type DeleteEventCommentMutation = { __typename?: 'Mutation', deleteEventComment?: boolean | null };

export const DeleteEventCommentDocument = gql`
    mutation deleteEventComment($id: String) {
  deleteEventComment(id: $id)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteEventCommentGQL extends Apollo.Mutation<DeleteEventCommentMutation, DeleteEventCommentMutationVariables> {
    override document = DeleteEventCommentDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }