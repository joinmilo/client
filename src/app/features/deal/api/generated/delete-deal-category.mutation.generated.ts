/* eslint-disable */
import * as Types from '../../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type DeleteDealCategoryMutationVariables = Types.Exact<{
  id?: Types.InputMaybe<Types.Scalars['String']['input']>;
}>;


export type DeleteDealCategoryMutation = { __typename?: 'Mutation', deleteDealCategory?: boolean | null };

export const DeleteDealCategoryDocument = gql`
    mutation deleteDealCategory($id: String) {
  deleteDealCategory(id: $id)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteDealCategoryGQL extends Apollo.Mutation<DeleteDealCategoryMutation, DeleteDealCategoryMutationVariables> {
    override document = DeleteDealCategoryDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }