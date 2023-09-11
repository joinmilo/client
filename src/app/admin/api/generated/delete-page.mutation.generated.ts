/* eslint-disable */
import * as Types from '../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type DeletePageMutationVariables = Types.Exact<{
  id?: Types.InputMaybe<Types.Scalars['String']>;
}>;


export type DeletePageMutation = { __typename?: 'Mutation', deletePage?: boolean | null };

export const DeletePageDocument = gql`
    mutation deletePage($id: String) {
  deletePage(id: $id)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeletePageGQL extends Apollo.Mutation<DeletePageMutation, DeletePageMutationVariables> {
    override document = DeletePageDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }