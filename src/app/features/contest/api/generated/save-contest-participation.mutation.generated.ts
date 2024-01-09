/* eslint-disable */
import * as Types from '../../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type SaveContestParticipationMutationVariables = Types.Exact<{
  entity: Types.ContestParticipationEntityInput;
}>;


export type SaveContestParticipationMutation = { __typename?: 'Mutation', saveContestParticipation?: { __typename?: 'ContestParticipationEntity', id?: string | null } | null };

export const SaveContestParticipationDocument = gql`
    mutation saveContestParticipation($entity: ContestParticipationEntityInput!) {
  saveContestParticipation(entity: $entity) {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class SaveContestParticipationGQL extends Apollo.Mutation<SaveContestParticipationMutation, SaveContestParticipationMutationVariables> {
    override document = SaveContestParticipationDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }