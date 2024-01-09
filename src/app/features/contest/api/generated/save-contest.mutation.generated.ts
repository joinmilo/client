/* eslint-disable */
import * as Types from '../../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type SaveContestMutationVariables = Types.Exact<{
  entity: Types.ContestEntityInput;
}>;


export type SaveContestMutation = { __typename?: 'Mutation', saveContest?: { __typename?: 'ContestEntity', id?: string | null } | null };

export const SaveContestDocument = gql`
    mutation saveContest($entity: ContestEntityInput!) {
  saveContest(entity: $entity) {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class SaveContestGQL extends Apollo.Mutation<SaveContestMutation, SaveContestMutationVariables> {
    override document = SaveContestDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }