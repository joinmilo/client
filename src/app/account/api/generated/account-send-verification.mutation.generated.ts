/* eslint-disable */
import * as Types from '../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type SendVerificationMutationVariables = Types.Exact<{
  email?: Types.InputMaybe<Types.Scalars['String']['input']>;
}>;


export type SendVerificationMutation = { __typename?: 'Mutation', sendVerification?: boolean | null };

export const SendVerificationDocument = gql`
    mutation sendVerification($email: String) {
  sendVerification(email: $email)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class SendVerificationGQL extends Apollo.Mutation<SendVerificationMutation, SendVerificationMutationVariables> {
    override document = SendVerificationDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }