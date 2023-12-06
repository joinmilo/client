/* eslint-disable */
import * as Types from '../../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type DeleteContestMutationVariables = Types.Exact<{
  id?: Types.InputMaybe<Types.Scalars['String']['input']>;
}>;


export type DeleteContestMutation = { __typename?: 'Mutation', deleteContest?: boolean | null };

export const DeleteContestDocument = gql`
    mutation deleteContest($id: String) {
  deleteContest(id: $id)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteContestGQL extends Apollo.Mutation<DeleteContestMutation, DeleteContestMutationVariables> {
    override document = DeleteContestDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }