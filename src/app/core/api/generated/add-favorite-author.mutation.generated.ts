/* eslint-disable */
import * as Types from './schema';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type AddFavoriteAuthorMutationVariables = Types.Exact<{
  userContextId?: Types.InputMaybe<Types.Scalars['String']['input']>;
}>;


export type AddFavoriteAuthorMutation = { __typename?: 'Mutation', addFavoriteAuthor?: { __typename?: 'UserContextEntity', id?: string | null } | null };

export const AddFavoriteAuthorDocument = gql`
    mutation addFavoriteAuthor($userContextId: String) {
  addFavoriteAuthor(userContextId: $userContextId) {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class AddFavoriteAuthorGQL extends Apollo.Mutation<AddFavoriteAuthorMutation, AddFavoriteAuthorMutationVariables> {
    override document = AddFavoriteAuthorDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }