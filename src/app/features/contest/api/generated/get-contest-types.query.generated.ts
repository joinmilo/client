/* eslint-disable */
import * as Types from '../../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { LanguageFragmentDoc } from '../../../../core/api/generated/language.fragment.generated';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type GetContestTypesQueryVariables = Types.Exact<{
  params?: Types.InputMaybe<Types.FilterSortPaginateInput>;
}>;


export type GetContestTypesQuery = { __typename?: 'Query', getContestTypes?: { __typename?: 'PageableList_ContestTypeEntity', result?: Array<{ __typename?: 'ContestTypeEntity', id?: string | null, name?: string | null, translatables?: Array<{ __typename?: 'ContestTypeTranslatableEntity', id?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null> | null } | null };

export const GetContestTypesDocument = gql`
    query getContestTypes($params: FilterSortPaginateInput) {
  getContestTypes(params: $params) {
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
  export class GetContestTypesGQL extends Apollo.Query<GetContestTypesQuery, GetContestTypesQueryVariables> {
    override document = GetContestTypesDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }