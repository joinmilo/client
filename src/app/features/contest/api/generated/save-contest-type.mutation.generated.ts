/* eslint-disable */
import * as Types from '../../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type SaveContestTypeMutationVariables = Types.Exact<{
  entity: Types.ContestTypeEntityInput;
}>;


export type SaveContestTypeMutation = { __typename?: 'Mutation', saveContestType?: { __typename?: 'ContestTypeEntity', id?: string | null } | null };

export const SaveContestTypeDocument = gql`
    mutation saveContestType($entity: ContestTypeEntityInput!) {
  saveContestType(entity: $entity) {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class SaveContestTypeGQL extends Apollo.Mutation<SaveContestTypeMutation, SaveContestTypeMutationVariables> {
    override document = SaveContestTypeDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }