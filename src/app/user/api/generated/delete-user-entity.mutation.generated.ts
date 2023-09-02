/* eslint-disable */
import * as Types from '../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type DeleteMeMutationVariables = Types.Exact<{
  userDeletion?: Types.InputMaybe<Types.UserDeletionEntityInput>;
  password?: Types.InputMaybe<Types.Scalars['String']>;
}>;


export type DeleteMeMutation = { __typename?: 'Mutation', deleteMe?: boolean | null };

export const DeleteMeDocument = gql`
    mutation deleteMe($userDeletion: UserDeletionEntityInput, $password: String) {
  deleteMe(userDeletion: $userDeletion, password: $password)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteMeGQL extends Apollo.Mutation<DeleteMeMutation, DeleteMeMutationVariables> {
    override document = DeleteMeDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }