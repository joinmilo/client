/* eslint-disable */
import * as Types from '../../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { ContactFragmentDoc } from '../../../../core/api/generated/contact.fragment.generated';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type GetOrganisationsQueryVariables = Types.Exact<{
  params?: Types.InputMaybe<Types.FilterSortPaginateInput>;
}>;


export type GetOrganisationsQuery = { __typename?: 'Query', getOrganisations?: { __typename?: 'PageableList_OrganisationEntity', total: any, result?: Array<{ __typename?: 'OrganisationEntity', id?: string | null, created?: any | null, modified?: any | null, slug?: string | null, sponsored?: boolean | null, name?: string | null, contact?: { __typename?: 'ContactEntity', id?: string | null, email?: string | null, name?: string | null, phone?: string | null, preferredContact?: boolean | null, website?: string | null } | null } | null> | null } | null };

export const GetOrganisationsDocument = gql`
    query getOrganisations($params: FilterSortPaginateInput) {
  getOrganisations(params: $params) {
    result {
      id
      created
      modified
      slug
      sponsored
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
  export class GetOrganisationsGQL extends Apollo.Query<GetOrganisationsQuery, GetOrganisationsQueryVariables> {
    override document = GetOrganisationsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }