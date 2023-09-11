/* eslint-disable */
import * as Types from '../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type GetAddressesQueryVariables = Types.Exact<{
  params?: Types.InputMaybe<Types.FilterSortPaginateInput>;
}>;


export type GetAddressesQuery = { __typename?: 'Query', getAddresses?: { __typename?: 'PageableList_AddressEntity', total: any, result?: Array<{ __typename?: 'AddressEntity', id?: string | null, houseNumber?: string | null, latitude?: number | null, longitude?: number | null, place?: string | null, postalCode?: string | null, street?: string | null, suburb?: { __typename?: 'SuburbEntity', id?: string | null } | null } | null> | null } | null };

export const GetAddressesDocument = gql`
    query getAddresses($params: FilterSortPaginateInput) {
  getAddresses(params: $params) {
    result {
      id
      houseNumber
      latitude
      longitude
      place
      postalCode
      street
      suburb {
        id
      }
    }
    total
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetAddressesGQL extends Apollo.Query<GetAddressesQuery, GetAddressesQueryVariables> {
    override document = GetAddressesDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }