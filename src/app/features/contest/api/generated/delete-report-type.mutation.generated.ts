/* eslint-disable */
import * as Types from '../../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type DeleteContestTypeMutationVariables = Types.Exact<{
  id?: Types.InputMaybe<Types.Scalars['String']>;
}>;


export type DeleteContestTypeMutation = { __typename?: 'Mutation', deleteContestType?: boolean | null };

export const DeleteContestTypeDocument = gql`
    mutation deleteContestType($id: String) {
  deleteContestType(id: $id)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteContestTypeGQL extends Apollo.Mutation<DeleteContestTypeMutation, DeleteContestTypeMutationVariables> {
    override document = DeleteContestTypeDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }