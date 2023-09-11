/* eslint-disable */
import * as Types from '../../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type DeleteMediumMutationVariables = Types.Exact<{
  id?: Types.InputMaybe<Types.Scalars['String']>;
}>;


export type DeleteMediumMutation = { __typename?: 'Mutation', deleteMedium?: boolean | null };

export const DeleteMediumDocument = gql`
    mutation deleteMedium($id: String) {
  deleteMedium(id: $id)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteMediumGQL extends Apollo.Mutation<DeleteMediumMutation, DeleteMediumMutationVariables> {
    override document = DeleteMediumDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }