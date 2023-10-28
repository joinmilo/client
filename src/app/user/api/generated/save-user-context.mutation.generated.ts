/* eslint-disable */
import * as Types from '../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type SaveMeMutationVariables = Types.Exact<{
  entity: Types.UserContextEntityInput;
}>;


export type SaveMeMutation = { __typename?: 'Mutation', saveMe?: { __typename?: 'UserContextEntity', id?: string | null } | null };

export const SaveMeDocument = gql`
    mutation saveMe($entity: UserContextEntityInput!) {
  saveMe(entity: $entity) {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class SaveMeGQL extends Apollo.Mutation<SaveMeMutation, SaveMeMutationVariables> {
    override document = SaveMeDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }