/* eslint-disable */
import * as Types from '../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type SaveOrganisationApplicationMutationVariables = Types.Exact<{
  entity: Types.OrganisationEntityInput;
}>;


export type SaveOrganisationApplicationMutation = { __typename?: 'Mutation', saveOrganisation?: { __typename?: 'OrganisationEntity', id?: string | null } | null };

export const SaveOrganisationApplicationDocument = gql`
    mutation saveOrganisationApplication($entity: OrganisationEntityInput!) {
  saveOrganisation(entity: $entity) {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class SaveOrganisationApplicationGQL extends Apollo.Mutation<SaveOrganisationApplicationMutation, SaveOrganisationApplicationMutationVariables> {
    override document = SaveOrganisationApplicationDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }