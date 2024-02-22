/* eslint-disable */
import * as Types from '../../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type DeleteNavigatorNodeMutationVariables = Types.Exact<{
  id?: Types.InputMaybe<Types.Scalars['String']['input']>;
}>;


export type DeleteNavigatorNodeMutation = { __typename?: 'Mutation', deleteNavigatorNode?: boolean | null };

export const DeleteNavigatorNodeDocument = gql`
    mutation deleteNavigatorNode($id: String) {
  deleteNavigatorNode(id: $id)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteNavigatorNodeGQL extends Apollo.Mutation<DeleteNavigatorNodeMutation, DeleteNavigatorNodeMutationVariables> {
    override document = DeleteNavigatorNodeDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }