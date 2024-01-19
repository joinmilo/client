/* eslint-disable */
import * as Types from '../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type SavePrivilegeApplicationMutationVariables = Types.Exact<{
  entity: Types.PrivilegeApplicationEntityInput;
}>;


export type SavePrivilegeApplicationMutation = { __typename?: 'Mutation', savePrivilegeApplication?: { __typename?: 'PrivilegeApplicationEntity', id?: string | null } | null };

export const SavePrivilegeApplicationDocument = gql`
    mutation savePrivilegeApplication($entity: PrivilegeApplicationEntityInput!) {
  savePrivilegeApplication(entity: $entity) {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class SavePrivilegeApplicationGQL extends Apollo.Mutation<SavePrivilegeApplicationMutation, SavePrivilegeApplicationMutationVariables> {
    override document = SavePrivilegeApplicationDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }