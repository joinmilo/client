/* eslint-disable */
import * as Types from '../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type DeleteSuburbMutationVariables = Types.Exact<{
  id?: Types.InputMaybe<Types.Scalars['String']['input']>;
}>;


export type DeleteSuburbMutation = { __typename?: 'Mutation', deleteSuburb?: boolean | null };

export const DeleteSuburbDocument = gql`
    mutation deleteSuburb($id: String) {
  deleteSuburb(id: $id)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteSuburbGQL extends Apollo.Mutation<DeleteSuburbMutation, DeleteSuburbMutationVariables> {
    override document = DeleteSuburbDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }