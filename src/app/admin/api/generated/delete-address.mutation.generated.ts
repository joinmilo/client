/* eslint-disable */
import * as Types from '../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type DeleteAddressMutationVariables = Types.Exact<{
  id?: Types.InputMaybe<Types.Scalars['String']['input']>;
}>;


export type DeleteAddressMutation = { __typename?: 'Mutation', deleteAddress?: boolean | null };

export const DeleteAddressDocument = gql`
    mutation deleteAddress($id: String) {
  deleteAddress(id: $id)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteAddressGQL extends Apollo.Mutation<DeleteAddressMutation, DeleteAddressMutationVariables> {
    override document = DeleteAddressDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }