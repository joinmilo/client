/* eslint-disable */
import * as Types from '../../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type SponsorDealMutationVariables = Types.Exact<{
  dealId?: Types.InputMaybe<Types.Scalars['String']['input']>;
}>;


export type SponsorDealMutation = { __typename?: 'Mutation', sponsorDeal?: boolean | null };

export const SponsorDealDocument = gql`
    mutation sponsorDeal($dealId: String) {
  sponsorDeal(dealId: $dealId)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class SponsorDealGQL extends Apollo.Mutation<SponsorDealMutation, SponsorDealMutationVariables> {
    override document = SponsorDealDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }