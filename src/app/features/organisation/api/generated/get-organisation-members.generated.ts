/* eslint-disable */
import * as Types from '../../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type GetOrganisationMembersQueryVariables = Types.Exact<{
  params?: Types.InputMaybe<Types.FilterSortPaginateInput>;
}>;


export type GetOrganisationMembersQuery = { __typename?: 'Query', getOrganisationMembers?: { __typename?: 'PageableList_OrganisationMemberEntity', total: any, result?: Array<{ __typename?: 'OrganisationMemberEntity', id?: string | null, approved?: boolean | null, isPublic?: boolean | null, userContext?: { __typename?: 'UserContextEntity', user?: { __typename?: 'UserEntity', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null } | null } | null, organisation?: { __typename?: 'OrganisationEntity', id?: string | null, slug?: string | null } | null } | null> | null } | null };

export const GetOrganisationMembersDocument = gql`
    query getOrganisationMembers($params: FilterSortPaginateInput) {
  getOrganisationMembers(params: $params) {
    result {
      id
      approved
      isPublic
      userContext {
        user {
          id
          firstName
          lastName
          email
        }
      }
      organisation {
        id
        slug
      }
    }
    total
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetOrganisationMembersGQL extends Apollo.Query<GetOrganisationMembersQuery, GetOrganisationMembersQueryVariables> {
    override document = GetOrganisationMembersDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }