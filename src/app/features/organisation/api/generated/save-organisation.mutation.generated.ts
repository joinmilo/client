/* eslint-disable */
import * as Types from '../../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type SaveOrganisationMutationVariables = Types.Exact<{
  entity: Types.OrganisationEntityInput;
}>;


export type SaveOrganisationMutation = { __typename?: 'Mutation', saveOrganisation?: { __typename?: 'OrganisationEntity', id?: string | null } | null };

export const SaveOrganisationDocument = gql`
    mutation saveOrganisation($entity: OrganisationEntityInput!) {
  saveOrganisation(entity: $entity) {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class SaveOrganisationGQL extends Apollo.Mutation<SaveOrganisationMutation, SaveOrganisationMutationVariables> {
    override document = SaveOrganisationDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }