/* eslint-disable */
import * as Types from './schema';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type AddFavoriteOrganisationMutationVariables = Types.Exact<{
  organisationId?: Types.InputMaybe<Types.Scalars['String']['input']>;
}>;


export type AddFavoriteOrganisationMutation = { __typename?: 'Mutation', addFavoriteOrganisation?: { __typename?: 'UserContextEntity', id?: string | null } | null };

export const AddFavoriteOrganisationDocument = gql`
    mutation addFavoriteOrganisation($organisationId: String) {
  addFavoriteOrganisation(organisationId: $organisationId) {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class AddFavoriteOrganisationGQL extends Apollo.Mutation<AddFavoriteOrganisationMutation, AddFavoriteOrganisationMutationVariables> {
    override document = AddFavoriteOrganisationDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }