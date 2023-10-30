/* eslint-disable */
import * as Types from '../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { LanguageFragmentDoc } from '../../../core/api/generated/language.fragment.generated';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type GetUsersQueryVariables = Types.Exact<{
  params?: Types.InputMaybe<Types.FilterSortPaginateInput>;
}>;


export type GetUsersQuery = { __typename?: 'Query', getUsers?: { __typename?: 'PageableList_UserEntity', total: any, result?: Array<{ __typename?: 'UserEntity', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, phone?: string | null, lastLogin?: any | null, verified?: boolean | null, roles?: Array<{ __typename?: 'RoleEntity', id?: string | null, translatables?: Array<{ __typename?: 'RoleTranslatableEntity', id?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null> | null } | null> | null } | null };

export const GetUsersDocument = gql`
    query getUsers($params: FilterSortPaginateInput) {
  getUsers(params: $params) {
    result {
      id
      firstName
      lastName
      email
      phone
      lastLogin
      verified
      roles {
        id
        translatables {
          id
          name
          language {
            ...Language
          }
        }
      }
    }
    total
  }
}
    ${LanguageFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetUsersGQL extends Apollo.Query<GetUsersQuery, GetUsersQueryVariables> {
    override document = GetUsersDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }