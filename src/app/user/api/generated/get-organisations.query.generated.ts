/* eslint-disable */
import * as Types from '../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type GetOrganisationsQueryVariables = Types.Exact<{
  params?: Types.InputMaybe<Types.FilterSortPaginateInput>;
}>;


export type GetOrganisationsQuery = { __typename?: 'Query', getOrganisations?: { __typename?: 'PageableList_OrganisationEntity', total: any, result?: Array<{ __typename?: 'OrganisationEntity', id?: string | null, name?: string | null, members?: Array<{ __typename?: 'OrganisationMemberEntity', approved?: boolean | null, userContext?: { __typename?: 'UserContextEntity', id?: string | null } | null } | null> | null } | null> | null } | null };

export const GetOrganisationsDocument = gql`
    query getOrganisations($params: FilterSortPaginateInput) {
  getOrganisations(params: $params) {
    result {
      id
      name
      members {
        approved
        userContext {
          id
        }
      }
    }
    total
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetOrganisationsGQL extends Apollo.Query<GetOrganisationsQuery, GetOrganisationsQueryVariables> {
    override document = GetOrganisationsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }