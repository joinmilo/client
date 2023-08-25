/* eslint-disable */
import * as Types from '../../../core/api/generated/schema';

import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
import { gql } from 'apollo-angular';
import { PrivilegeApplicationEntity } from '../../../core/api/generated/schema';
export type SaveUserMutationVariables = Types.Exact<{
  entity: Types.UserContextEntityInput;
}>;


export type SaveUserMutation = { __typename?: 'Mutation', saveUserContext?: { __typename?: 'UserContextEntity', id?: string | null, user?: { __typename?: 'UserEntity', id?: string | null, lastLogin?: any | null, firstName?: string | null, lastName?: string | null, phone?: string | null, privilegeApplications?: Array<PrivilegeApplicationEntity | null> | null } | null } | null };

export const SaveUserDocument = gql`
    mutation saveUser($entity: UserContextEntityInput!) {
  saveUserContext(entity: $entity) {
    id
    user {
      id
      lastLogin
      firstName
      lastName
      phone
      privilegeApplications
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class SaveUserGQL extends Apollo.Mutation<SaveUserMutation, SaveUserMutationVariables> {
    override document = SaveUserDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }