/* eslint-disable */
import * as Types from '../../../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { OrganisationCardFragmentDoc } from './organisation-card.fragment.generated';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type GetOrganisationCardQueryVariables = Types.Exact<{
  entity?: Types.InputMaybe<Types.OrganisationEntityInput>;
}>;


export type GetOrganisationCardQuery = { __typename?: 'Query', getOrganisation?: { __typename?: 'OrganisationEntity', approved?: boolean | null, id?: string | null, name?: string | null, slug?: string | null, address?: { __typename?: 'AddressEntity', id?: string | null, houseNumber?: string | null, place?: string | null, postalCode?: string | null, street?: string | null, latitude?: number | null, longitude?: number | null, suburb?: { __typename?: 'SuburbEntity', id?: string | null, name?: string | null } | null } | null, contact?: { __typename?: 'ContactEntity', id?: string | null, email?: string | null, name?: string | null, phone?: string | null, preferredContact?: boolean | null, website?: string | null } | null, uploads?: Array<{ __typename?: 'OrganisationMediaEntity', id?: string | null, title?: boolean | null, card?: boolean | null, media?: { __typename?: 'MediaEntity', id?: string | null, created?: any | null, extension?: string | null, mimeType?: string | null, modified?: any | null, name?: string | null, size?: any | null, url?: string | null, base64?: string | null, attribution?: { __typename?: 'MediaAttributionEntity', id?: string | null, title?: string | null, author?: string | null, source?: string | null, license?: string | null } | null } | null } | null> | null } | null };

export const GetOrganisationCardDocument = gql`
    query getOrganisationCard($entity: OrganisationEntityInput) {
  getOrganisation(entity: $entity) {
    ...OrganisationCard
  }
}
    ${OrganisationCardFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetOrganisationCardGQL extends Apollo.Query<GetOrganisationCardQuery, GetOrganisationCardQueryVariables> {
    override document = GetOrganisationCardDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }