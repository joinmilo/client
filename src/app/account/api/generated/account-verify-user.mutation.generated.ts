/* eslint-disable */
import * as Types from '../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type VerifyUserMutationVariables = Types.Exact<{
  token?: Types.InputMaybe<Types.Scalars['String']['input']>;
}>;


export type VerifyUserMutation = { __typename?: 'Mutation', verify?: { __typename?: 'UserEntity', id?: string | null, verified?: boolean | null } | null };

export const VerifyUserDocument = gql`
    mutation verifyUser($token: String) {
  verify(token: $token) {
    id
    verified
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class VerifyUserGQL extends Apollo.Mutation<VerifyUserMutation, VerifyUserMutationVariables> {
    override document = VerifyUserDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }