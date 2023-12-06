/* eslint-disable */
import * as Types from './schema';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type AddFavoriteDealMutationVariables = Types.Exact<{
  dealId?: Types.InputMaybe<Types.Scalars['String']['input']>;
}>;


export type AddFavoriteDealMutation = { __typename?: 'Mutation', addFavoriteDeal?: { __typename?: 'UserContextEntity', id?: string | null } | null };

export const AddFavoriteDealDocument = gql`
    mutation addFavoriteDeal($dealId: String) {
  addFavoriteDeal(dealId: $dealId) {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class AddFavoriteDealGQL extends Apollo.Mutation<AddFavoriteDealMutation, AddFavoriteDealMutationVariables> {
    override document = AddFavoriteDealDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }