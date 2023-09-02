/* eslint-disable */
import * as Types from '../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type SaveOrganisationApplicationMutationVariables = Types.Exact<{
  entity: Types.OrganisationEntityInput;
}>;


export type SaveOrganisationApplicationMutation = { __typename?: 'Mutation', saveOrganisation?: { __typename?: 'OrganisationEntity', name?: string | null, description?: string | null, slug?: string | null, approved?: boolean | null, sponsored?: boolean | null, address?: { __typename?: 'AddressEntity', street?: string | null, houseNumber?: string | null, place?: string | null, postalCode?: string | null } | null, contact?: { __typename?: 'ContactEntity', email?: string | null, website?: string | null, phone?: string | null } | null, uploads?: Array<{ __typename?: 'OrganisationMediaEntity', card?: boolean | null, title?: boolean | null, media?: { __typename?: 'MediaEntity', id?: string | null, url?: string | null } | null } | null> | null } | null };

export const SaveOrganisationApplicationDocument = gql`
    mutation saveOrganisationApplication($entity: OrganisationEntityInput!) {
  saveOrganisation(entity: $entity) {
    name
    address {
      street
      houseNumber
      place
      postalCode
    }
    contact {
      email
      website
      phone
    }
    uploads {
      card
      media {
        id
        url
      }
      title
    }
    description
    slug
    approved
    sponsored
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