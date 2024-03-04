/* eslint-disable */
import * as Types from '../../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type DeleteNavigatorPageMutationVariables = Types.Exact<{
  id?: Types.InputMaybe<Types.Scalars['String']['input']>;
}>;


export type DeleteNavigatorPageMutation = { __typename?: 'Mutation', deleteNavigatorPage?: boolean | null };

export const DeleteNavigatorPageDocument = gql`
    mutation deleteNavigatorPage($id: String) {
  deleteNavigatorPage(id: $id)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteNavigatorPageGQL extends Apollo.Mutation<DeleteNavigatorPageMutation, DeleteNavigatorPageMutationVariables> {
    override document = DeleteNavigatorPageDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }