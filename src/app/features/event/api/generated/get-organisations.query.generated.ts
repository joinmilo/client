/* eslint-disable */
import * as Types from '../../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { ContactFragmentDoc } from '../../../../core/api/generated/contact.fragment.generated';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type GetUserOrganisationsQueryVariables = Types.Exact<{
  params?: Types.InputMaybe<Types.FilterSortPaginateInput>;
}>;


export type GetUserOrganisationsQuery = { __typename?: 'Query', getOrganisations?: { __typename?: 'PageableList_OrganisationEntity', total: any, result?: Array<{ __typename?: 'OrganisationEntity', id?: string | null, created?: any | null, modified?: any | null, name?: string | null, contact?: { __typename?: 'ContactEntity', id?: string | null, email?: string | null, name?: string | null, phone?: string | null, preferredContact?: boolean | null, website?: string | null } | null } | null> | null } | null };

export const GetUserOrganisationsDocument = gql`
    query getUserOrganisations($params: FilterSortPaginateInput) {
  getOrganisations(params: $params) {
    result {
      id
      created
      modified
      name
      contact {
        ...Contact
      }
    }
    total
  }
}
    ${ContactFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetUserOrganisationsGQL extends Apollo.Query<GetUserOrganisationsQuery, GetUserOrganisationsQueryVariables> {
    override document = GetUserOrganisationsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }