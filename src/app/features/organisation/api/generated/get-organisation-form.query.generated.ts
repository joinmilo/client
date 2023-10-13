/* eslint-disable */
import * as Types from '../../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { AddressFragmentDoc } from '../../../../core/api/generated/address.fragment.generated';
import { ContactFragmentDoc } from '../../../../core/api/generated/contact.fragment.generated';
import { MediaFragmentDoc } from '../../../../core/api/generated/media.fragment.generated';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type GetOrganisationFormQueryVariables = Types.Exact<{
  entity?: Types.InputMaybe<Types.OrganisationEntityInput>;
}>;


export type GetOrganisationFormQuery = { __typename?: 'Query', getOrganisation?: { __typename?: 'OrganisationEntity', id?: string | null, created?: any | null, approved?: boolean | null, sponsored?: boolean | null, modified?: any | null, description?: string | null, metaDescription?: string | null, name?: string | null, slug?: string | null, address?: { __typename?: 'AddressEntity', id?: string | null, houseNumber?: string | null, place?: string | null, postalCode?: string | null, street?: string | null, latitude?: number | null, longitude?: number | null, suburb?: { __typename?: 'SuburbEntity', id?: string | null, name?: string | null } | null } | null, contact?: { __typename?: 'ContactEntity', id?: string | null, email?: string | null, name?: string | null, phone?: string | null, preferredContact?: boolean | null, website?: string | null } | null, uploads?: Array<{ __typename?: 'OrganisationMediaEntity', id?: string | null, title?: boolean | null, card?: boolean | null, media?: { __typename?: 'MediaEntity', id?: string | null, created?: any | null, extension?: string | null, mimeType?: string | null, modified?: any | null, name?: string | null, size?: any | null, url?: string | null, base64?: string | null, attribution?: { __typename?: 'MediaAttributionEntity', id?: string | null, title?: string | null, author?: string | null, source?: string | null, license?: string | null } | null } | null } | null> | null } | null };

export const GetOrganisationFormDocument = gql`
    query getOrganisationForm($entity: OrganisationEntityInput) {
  getOrganisation(entity: $entity) {
    id
    address {
      ...Address
    }
    created
    approved
    contact {
      ...Contact
    }
    sponsored
    modified
    description
    metaDescription
    name
    slug
    uploads {
      id
      title
      card
      media {
        ...Media
      }
    }
  }
}
    ${AddressFragmentDoc}
${ContactFragmentDoc}
${MediaFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetOrganisationFormGQL extends Apollo.Query<GetOrganisationFormQuery, GetOrganisationFormQueryVariables> {
    override document = GetOrganisationFormDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }