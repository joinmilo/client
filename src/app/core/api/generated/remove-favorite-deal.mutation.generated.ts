/* eslint-disable */
import * as Types from './schema';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type RemoveFavoriteDealMutationVariables = Types.Exact<{
  dealId?: Types.InputMaybe<Types.Scalars['String']['input']>;
}>;


export type RemoveFavoriteDealMutation = { __typename?: 'Mutation', removeFavoriteDeal?: { __typename?: 'UserContextEntity', id?: string | null } | null };

export const RemoveFavoriteDealDocument = gql`
    mutation removeFavoriteDeal($dealId: String) {
  removeFavoriteDeal(dealId: $dealId) {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class RemoveFavoriteDealGQL extends Apollo.Mutation<RemoveFavoriteDealMutation, RemoveFavoriteDealMutationVariables> {
    override document = RemoveFavoriteDealDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }