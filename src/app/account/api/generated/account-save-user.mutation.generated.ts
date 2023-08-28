/* eslint-disable */
import * as Types from '../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type SaveUserMutationVariables = Types.Exact<{
  entity: Types.UserContextEntityInput;
}>;


export type SaveUserMutation = { __typename?: 'Mutation', saveUserContext?: { __typename?: 'UserContextEntity', id?: string | null } | null };

export const SaveUserDocument = gql`
    mutation saveUser($entity: UserContextEntityInput!) {
  saveUserContext(entity: $entity) {
    id
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