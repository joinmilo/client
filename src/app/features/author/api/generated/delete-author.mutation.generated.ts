/* eslint-disable */
import * as Types from '../../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type DeleteUserContextMutationVariables = Types.Exact<{
  id?: Types.InputMaybe<Types.Scalars['String']>;
}>;


export type DeleteUserContextMutation = { __typename?: 'Mutation', deleteUserContext?: boolean | null };

export const DeleteUserContextDocument = gql`
    mutation deleteUserContext($id: String) {
  deleteUserContext(id: $id)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteUserContextGQL extends Apollo.Mutation<DeleteUserContextMutation, DeleteUserContextMutationVariables> {
    override document = DeleteUserContextDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }