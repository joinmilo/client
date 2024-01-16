/* eslint-disable */
import * as Types from '../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type AddRoleMutationVariables = Types.Exact<{
  roleId?: Types.InputMaybe<Types.Scalars['String']['input']>;
  userId?: Types.InputMaybe<Types.Scalars['String']['input']>;
}>;


export type AddRoleMutation = { __typename?: 'Mutation', addRole?: boolean | null };

export const AddRoleDocument = gql`
    mutation addRole($roleId: String, $userId: String) {
  addRole(roleId: $roleId, userId: $userId)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class AddRoleGQL extends Apollo.Mutation<AddRoleMutation, AddRoleMutationVariables> {
    override document = AddRoleDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }