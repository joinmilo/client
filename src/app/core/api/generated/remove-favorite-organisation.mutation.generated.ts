/* eslint-disable */
import * as Types from './schema';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type RemoveFavoriteOrganisationMutationVariables = Types.Exact<{
  organisationId?: Types.InputMaybe<Types.Scalars['String']['input']>;
}>;


export type RemoveFavoriteOrganisationMutation = { __typename?: 'Mutation', removeFavoriteOrganisation?: { __typename?: 'UserContextEntity', id?: string | null } | null };

export const RemoveFavoriteOrganisationDocument = gql`
    mutation removeFavoriteOrganisation($organisationId: String) {
  removeFavoriteOrganisation(organisationId: $organisationId) {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class RemoveFavoriteOrganisationGQL extends Apollo.Mutation<RemoveFavoriteOrganisationMutation, RemoveFavoriteOrganisationMutationVariables> {
    override document = RemoveFavoriteOrganisationDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }