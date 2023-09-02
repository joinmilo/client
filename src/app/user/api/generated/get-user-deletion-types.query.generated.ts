/* eslint-disable */
import * as Types from '../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { LanguageFragmentDoc } from '../../../core/api/generated/language.fragment.generated';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type GetUserDeletionTypesQueryVariables = Types.Exact<{
  params?: Types.InputMaybe<Types.FilterSortPaginateInput>;
}>;


export type GetUserDeletionTypesQuery = { __typename?: 'Query', getUserDeletionTypes?: { __typename?: 'PageableList_UserDeletionTypeEntity', result?: Array<{ __typename?: 'UserDeletionTypeEntity', id?: string | null, name?: string | null, translatables?: Array<{ __typename?: 'UserDeletionTypeTranslatableEntity', id?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null> | null } | null };

export const GetUserDeletionTypesDocument = gql`
    query getUserDeletionTypes($params: FilterSortPaginateInput) {
  getUserDeletionTypes(params: $params) {
    result {
      id
      name
      translatables {
        id
        name
        language {
          ...Language
        }
      }
    }
  }
}
    ${LanguageFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetUserDeletionTypesGQL extends Apollo.Query<GetUserDeletionTypesQuery, GetUserDeletionTypesQueryVariables> {
    override document = GetUserDeletionTypesDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }