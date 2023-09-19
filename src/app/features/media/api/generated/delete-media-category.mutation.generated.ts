/* eslint-disable */
import * as Types from '../../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type DeleteMediaCategoryMutationVariables = Types.Exact<{
  id?: Types.InputMaybe<Types.Scalars['String']>;
}>;


export type DeleteMediaCategoryMutation = { __typename?: 'Mutation', deleteInfoMediaCategory?: boolean | null };

export const DeleteMediaCategoryDocument = gql`
    mutation deleteMediaCategory($id: String) {
  deleteInfoMediaCategory(id: $id)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteMediaCategoryGQL extends Apollo.Mutation<DeleteMediaCategoryMutation, DeleteMediaCategoryMutationVariables> {
    override document = DeleteMediaCategoryDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }