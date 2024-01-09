/* eslint-disable */
import * as Types from '../../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type DeleteContestParticipationMutationVariables = Types.Exact<{
  id?: Types.InputMaybe<Types.Scalars['String']['input']>;
}>;


export type DeleteContestParticipationMutation = { __typename?: 'Mutation', deleteContestParticipation?: boolean | null };

export const DeleteContestParticipationDocument = gql`
    mutation deleteContestParticipation($id: String) {
  deleteContestParticipation(id: $id)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteContestParticipationGQL extends Apollo.Mutation<DeleteContestParticipationMutation, DeleteContestParticipationMutationVariables> {
    override document = DeleteContestParticipationDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }