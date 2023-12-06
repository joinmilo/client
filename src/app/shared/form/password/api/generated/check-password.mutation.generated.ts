/* eslint-disable */
import * as Types from '../../../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type CheckPasswordMutationVariables = Types.Exact<{
  password?: Types.InputMaybe<Types.Scalars['String']['input']>;
}>;


export type CheckPasswordMutation = { __typename?: 'Mutation', checkPassword?: number | null };

export const CheckPasswordDocument = gql`
    mutation checkPassword($password: String) {
  checkPassword(password: $password)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CheckPasswordGQL extends Apollo.Mutation<CheckPasswordMutation, CheckPasswordMutationVariables> {
    override document = CheckPasswordDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }