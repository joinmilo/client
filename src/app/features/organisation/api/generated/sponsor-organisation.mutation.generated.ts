/* eslint-disable */
import * as Types from '../../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type SponsorOrganisationMutationVariables = Types.Exact<{
  organisationId?: Types.InputMaybe<Types.Scalars['String']['input']>;
}>;


export type SponsorOrganisationMutation = { __typename?: 'Mutation', sponsorOrganisation?: boolean | null };

export const SponsorOrganisationDocument = gql`
    mutation sponsorOrganisation($organisationId: String) {
  sponsorOrganisation(organisationId: $organisationId)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class SponsorOrganisationGQL extends Apollo.Mutation<SponsorOrganisationMutation, SponsorOrganisationMutationVariables> {
    override document = SponsorOrganisationDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }