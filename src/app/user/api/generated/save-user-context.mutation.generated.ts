/* eslint-disable */
import * as Types from '../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type SaveUserContextMutationVariables = Types.Exact<{
  entity: Types.UserContextEntityInput;
}>;


export type SaveUserContextMutation = { __typename?: 'Mutation', saveUserContext?: { __typename?: 'UserContextEntity', description?: string | null, address?: { __typename?: 'AddressEntity', houseNumber?: string | null, place?: string | null, postalCode?: string | null, street?: string | null, suburb?: { __typename?: 'SuburbEntity', name?: string | null } | null } | null, user?: { __typename?: 'UserEntity', email?: string | null, firstName?: string | null, lastName?: string | null, phone?: string | null } | null } | null };

export const SaveUserContextDocument = gql`
    mutation saveUserContext($entity: UserContextEntityInput!) {
  saveUserContext(entity: $entity) {
    address {
      houseNumber
      place
      postalCode
      street
      suburb {
        name
      }
    }
    user {
      email
      firstName
      lastName
      phone
    }
    description
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