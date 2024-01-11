/* eslint-disable */
import * as Types from '../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type AssignLandingPageMutationVariables = Types.Exact<{
  pageId?: Types.InputMaybe<Types.Scalars['String']['input']>;
}>;


export type AssignLandingPageMutation = { __typename?: 'Mutation', assignLandingPage?: boolean | null };

export const AssignLandingPageDocument = gql`
    mutation assignLandingPage($pageId: String) {
  assignLandingPage(pageId: $pageId)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class AssignLandingPageGQL extends Apollo.Mutation<AssignLandingPageMutation, AssignLandingPageMutationVariables> {
    override document = AssignLandingPageDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }