/* eslint-disable */
import * as Types from '../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type SaveUserContextMutationVariables = Types.Exact<{
  entity: Types.UserContextEntityInput;
}>;


export type SaveUserContextMutation = { __typename?: 'Mutation', saveUserContext?: { __typename?: 'UserContextEntity', id?: string | null } | null };

export const SaveUserContextDocument = gql`
    mutation saveUserContext($entity: UserContextEntityInput!) {
  saveUserContext(entity: $entity) {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class SaveUserContextGQL extends Apollo.Mutation<SaveUserContextMutation, SaveUserContextMutationVariables> {
    override document = SaveUserContextDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }