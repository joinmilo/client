/* eslint-disable */
import * as Types from '../../../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { OrganisationCardFragmentDoc } from './organisation-card.fragment.generated';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type GetOrganisationCardsQueryVariables = Types.Exact<{
  params?: Types.InputMaybe<Types.FilterSortPaginateInput>;
}>;


export type GetOrganisationCardsQuery = { __typename?: 'Query', getOrganisations?: { __typename?: 'PageableList_OrganisationEntity', total: any, result?: Array<{ __typename?: 'OrganisationEntity', approved?: boolean | null, id?: string | null, name?: string | null, slug?: string | null, address?: { __typename?: 'AddressEntity', id?: string | null, houseNumber?: string | null, place?: string | null, postalCode?: string | null, street?: string | null, latitude?: number | null, longitude?: number | null, suburb?: { __typename?: 'SuburbEntity', id?: string | null, name?: string | null } | null } | null, contact?: { __typename?: 'ContactEntity', id?: string | null, email?: string | null, name?: string | null, phone?: string | null, preferredContact?: boolean | null, website?: string | null } | null, uploads?: Array<{ __typename?: 'OrganisationMediaEntity', id?: string | null, title?: boolean | null, card?: boolean | null, media?: { __typename?: 'MediaEntity', id?: string | null, created?: any | null, extension?: string | null, mimeType?: string | null, modified?: any | null, name?: string | null, size?: any | null, url?: string | null, base64?: string | null, attribution?: { __typename?: 'MediaAttributionEntity', id?: string | null, title?: string | null, author?: string | null, source?: string | null, license?: string | null } | null } | null } | null> | null } | null> | null } | null };

export const GetOrganisationCardsDocument = gql`
    query getOrganisationCards($params: FilterSortPaginateInput) {
  getOrganisations(params: $params) {
    result {
      ...OrganisationCard
    }
    total
  }
}
    ${OrganisationCardFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetOrganisationCardsGQL extends Apollo.Query<GetOrganisationCardsQuery, GetOrganisationCardsQueryVariables> {
    override document = GetOrganisationCardsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }