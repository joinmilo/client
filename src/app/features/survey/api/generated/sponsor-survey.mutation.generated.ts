/* eslint-disable */
import * as Types from '../../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type SponsorSurveyMutationVariables = Types.Exact<{
  surveyId?: Types.InputMaybe<Types.Scalars['String']['input']>;
}>;


export type SponsorSurveyMutation = { __typename?: 'Mutation', sponsorSurvey?: boolean | null };

export const SponsorSurveyDocument = gql`
    mutation sponsorSurvey($surveyId: String) {
  sponsorSurvey(surveyId: $surveyId)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class SponsorSurveyGQL extends Apollo.Mutation<SponsorSurveyMutation, SponsorSurveyMutationVariables> {
    override document = SponsorSurveyDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }