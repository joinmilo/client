/* eslint-disable */
import * as Types from '../../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type DeleteInfoMediumMutationVariables = Types.Exact<{
  id?: Types.InputMaybe<Types.Scalars['String']>;
}>;


export type DeleteInfoMediumMutation = { __typename?: 'Mutation', deleteInfoMedium?: boolean | null };

export const DeleteInfoMediumDocument = gql`
    mutation deleteInfoMedium($id: String) {
  deleteInfoMedium(id: $id)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteInfoMediumGQL extends Apollo.Mutation<DeleteInfoMediumMutation, DeleteInfoMediumMutationVariables> {
    override document = DeleteInfoMediumDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }