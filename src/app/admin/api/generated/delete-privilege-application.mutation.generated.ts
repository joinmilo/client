/* eslint-disable */
import * as Types from '../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type DeletePrivilegeApplicationMutationVariables = Types.Exact<{
  id?: Types.InputMaybe<Types.Scalars['String']['input']>;
}>;


export type DeletePrivilegeApplicationMutation = { __typename?: 'Mutation', deletePrivilegeApplication?: boolean | null };

export const DeletePrivilegeApplicationDocument = gql`
    mutation deletePrivilegeApplication($id: String) {
  deletePrivilegeApplication(id: $id)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeletePrivilegeApplicationGQL extends Apollo.Mutation<DeletePrivilegeApplicationMutation, DeletePrivilegeApplicationMutationVariables> {
    override document = DeletePrivilegeApplicationDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }