/* eslint-disable */
import * as Types from '../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type AddUserRoleMutationVariables = Types.Exact<{
  roleId?: Types.InputMaybe<Types.Scalars['String']['input']>;
  userId?: Types.InputMaybe<Types.Scalars['String']['input']>;
  privilegeApplicationId?: Types.InputMaybe<Types.Scalars['String']['input']>;
}>;


export type AddUserRoleMutation = { __typename?: 'Mutation', addUserRole?: boolean | null };

export const AddUserRoleDocument = gql`
    mutation addUserRole($roleId: String, $userId: String, $privilegeApplicationId: String) {
  addUserRole(
    roleId: $roleId
    userId: $userId
    privilegeApplicationId: $privilegeApplicationId
  )
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class AddUserRoleGQL extends Apollo.Mutation<AddUserRoleMutation, AddUserRoleMutationVariables> {
    override document = AddUserRoleDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }