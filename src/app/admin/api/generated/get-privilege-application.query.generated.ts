/* eslint-disable */
import * as Types from '../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { LanguageFragmentDoc } from '../../../core/api/generated/language.fragment.generated';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type GetPrivilegeApplicationsQueryVariables = Types.Exact<{
  params?: Types.InputMaybe<Types.FilterSortPaginateInput>;
}>;


export type GetPrivilegeApplicationsQuery = { __typename?: 'Query', getPrivilegeApplications?: { __typename?: 'PageableList_PrivilegeApplicationEntity', total: any, result?: Array<{ __typename?: 'PrivilegeApplicationEntity', accepted?: boolean | null, content?: string | null, id?: string | null, privilege?: { __typename?: 'RolePrivilegeEntity', id?: string | null, name?: string | null, code?: string | null, translatables?: Array<{ __typename?: 'RolePrivilegeTranslatableEntity', id?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null, translatables?: Array<{ __typename?: 'PrivilegeApplicationTranslatableEntity', id?: string | null, content?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null, user?: { __typename?: 'UserEntity', id?: string | null, email?: string | null, firstName?: string | null, lastName?: string | null, lastLogin?: any | null } | null } | null> | null } | null };

export const GetPrivilegeApplicationsDocument = gql`
    query getPrivilegeApplications($params: FilterSortPaginateInput) {
  getPrivilegeApplications(params: $params) {
    result {
      accepted
      content
      id
      privilege {
        id
        name
        code
        translatables {
          id
          name
          language {
            ...Language
          }
        }
      }
      translatables {
        id
        content
        language {
          ...Language
        }
      }
      user {
        id
        email
        firstName
        lastName
        lastLogin
      }
    }
    total
  }
}
    ${LanguageFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetPrivilegeApplicationsGQL extends Apollo.Query<GetPrivilegeApplicationsQuery, GetPrivilegeApplicationsQueryVariables> {
    override document = GetPrivilegeApplicationsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }