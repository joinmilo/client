/* eslint-disable */
import * as Types from '../../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type DeleteDealMutationVariables = Types.Exact<{
  id?: Types.InputMaybe<Types.Scalars['String']['input']>;
}>;


export type DeleteDealMutation = { __typename?: 'Mutation', deleteDeal?: boolean | null };

export const DeleteDealDocument = gql`
    mutation deleteDeal($id: String) {
  deleteDeal(id: $id)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteDealGQL extends Apollo.Mutation<DeleteDealMutation, DeleteDealMutationVariables> {
    override document = DeleteDealDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }