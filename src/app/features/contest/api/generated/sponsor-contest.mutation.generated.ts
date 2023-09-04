/* eslint-disable */
import * as Types from '../../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type SponsorContestMutationVariables = Types.Exact<{
  contestId?: Types.InputMaybe<Types.Scalars['String']>;
}>;


export type SponsorContestMutation = { __typename?: 'Mutation', sponsorContest?: boolean | null };

export const SponsorContestDocument = gql`
    mutation sponsorContest($contestId: String) {
  sponsorContest(contestId: $contestId)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class SponsorContestGQL extends Apollo.Mutation<SponsorContestMutation, SponsorContestMutationVariables> {
    override document = SponsorContestDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }