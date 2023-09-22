/* eslint-disable */
import * as Types from '../../../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { AddressFragmentDoc } from '../../../../../core/api/generated/address.fragment.generated';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type VerifyAddressMutationVariables = Types.Exact<{
  entity?: Types.InputMaybe<Types.AddressEntityInput>;
}>;


export type VerifyAddressMutation = { __typename?: 'Mutation', verifyAddress?: { __typename?: 'AddressEntity', id?: string | null, houseNumber?: string | null, place?: string | null, postalCode?: string | null, street?: string | null, latitude?: number | null, longitude?: number | null, suburb?: { __typename?: 'SuburbEntity', id?: string | null, name?: string | null } | null } | null };

export const VerifyAddressDocument = gql`
    mutation verifyAddress($entity: AddressEntityInput) {
  verifyAddress(entity: $entity) {
    ...Address
  }
}
    ${AddressFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class VerifyAddressGQL extends Apollo.Mutation<VerifyAddressMutation, VerifyAddressMutationVariables> {
    override document = VerifyAddressDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }