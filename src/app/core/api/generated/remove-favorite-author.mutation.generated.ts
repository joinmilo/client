/* eslint-disable */
import * as Types from './schema';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type RemoveFavoriteAuthorMutationVariables = Types.Exact<{
  userContextId?: Types.InputMaybe<Types.Scalars['String']['input']>;
}>;


export type RemoveFavoriteAuthorMutation = { __typename?: 'Mutation', removeFavoriteAuthor?: { __typename?: 'UserContextEntity', id?: string | null } | null };

export const RemoveFavoriteAuthorDocument = gql`
    mutation removeFavoriteAuthor($userContextId: String) {
  removeFavoriteAuthor(userContextId: $userContextId) {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class RemoveFavoriteAuthorGQL extends Apollo.Mutation<RemoveFavoriteAuthorMutation, RemoveFavoriteAuthorMutationVariables> {
    override document = RemoveFavoriteAuthorDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }