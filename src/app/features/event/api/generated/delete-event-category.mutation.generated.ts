/* eslint-disable */
import * as Types from '../../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type DeleteEventCategoryMutationVariables = Types.Exact<{
  id?: Types.InputMaybe<Types.Scalars['String']['input']>;
}>;


export type DeleteEventCategoryMutation = { __typename?: 'Mutation', deleteEventCategory?: boolean | null };

export const DeleteEventCategoryDocument = gql`
    mutation deleteEventCategory($id: String) {
  deleteEventCategory(id: $id)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteEventCategoryGQL extends Apollo.Mutation<DeleteEventCategoryMutation, DeleteEventCategoryMutationVariables> {
    override document = DeleteEventCategoryDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }