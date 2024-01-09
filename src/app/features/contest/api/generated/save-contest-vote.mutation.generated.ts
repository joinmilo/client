/* eslint-disable */
import * as Types from '../../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type SaveContestVoteMutationVariables = Types.Exact<{
  entity: Types.ContestVoteEntityInput;
}>;


export type SaveContestVoteMutation = { __typename?: 'Mutation', saveContestVote?: { __typename?: 'ContestVoteEntity', id?: string | null } | null };

export const SaveContestVoteDocument = gql`
    mutation saveContestVote($entity: ContestVoteEntityInput!) {
  saveContestVote(entity: $entity) {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class SaveContestVoteGQL extends Apollo.Mutation<SaveContestVoteMutation, SaveContestVoteMutationVariables> {
    override document = SaveContestVoteDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }