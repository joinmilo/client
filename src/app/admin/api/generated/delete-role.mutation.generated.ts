/* eslint-disable */
import * as Types from '../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type DeleteRoleMutationVariables = Types.Exact<{
  id?: Types.InputMaybe<Types.Scalars['String']>;
}>;


export type DeleteRoleMutation = { __typename?: 'Mutation', deleteRole?: boolean | null };

export const DeleteRoleDocument = gql`
    mutation deleteRole($id: String) {
  deleteRole(id: $id)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteRoleGQL extends Apollo.Mutation<DeleteRoleMutation, DeleteRoleMutationVariables> {
    override document = DeleteRoleDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }