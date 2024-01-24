/* eslint-disable */
import * as Types from '../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type AddUserMutationVariables = Types.Exact<{
  roleId?: Types.InputMaybe<Types.Scalars['String']['input']>;
  userId?: Types.InputMaybe<Types.Scalars['String']['input']>;
}>;


export type AddUserMutation = { __typename?: 'Mutation', addUser?: boolean | null };

export const AddUserDocument = gql`
    mutation addUser($roleId: String, $userId: String) {
  addUser(roleId: $roleId, userId: $userId)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class AddUserGQL extends Apollo.Mutation<AddUserMutation, AddUserMutationVariables> {
    override document = AddUserDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }