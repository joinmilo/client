/* eslint-disable */
import * as Types from '../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type GetLanguagesQueryVariables = Types.Exact<{
  params?: Types.InputMaybe<Types.FilterSortPaginateInput>;
}>;


export type GetLanguagesQuery = { __typename?: 'Query', getLanguages?: { __typename?: 'PageableList_LanguageEntity', total: any, result?: Array<{ __typename?: 'LanguageEntity', id?: string | null, active?: boolean | null, locale?: string | null, name?: string | null } | null> | null } | null };

export const GetLanguagesDocument = gql`
    query getLanguages($params: FilterSortPaginateInput) {
  getLanguages(params: $params) {
    result {
      id
      active
      locale
      name
    }
    total
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetLanguagesGQL extends Apollo.Query<GetLanguagesQuery, GetLanguagesQueryVariables> {
    override document = GetLanguagesDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }