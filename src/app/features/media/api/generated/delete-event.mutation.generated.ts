/* eslint-disable */
import * as Types from '../../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type DeleteInfoMediaMutationVariables = Types.Exact<{
  id?: Types.InputMaybe<Types.Scalars['String']>;
}>;


export type DeleteInfoMediaMutation = { __typename?: 'Mutation', deleteInfoMedia?: boolean | null };

export const DeleteInfoMediaDocument = gql`
    mutation deleteInfoMedia($id: String) {
  deleteInfoMedia(id: $id)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteInfoMediaGQL extends Apollo.Mutation<DeleteInfoMediaMutation, DeleteInfoMediaMutationVariables> {
    override document = DeleteInfoMediaDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }