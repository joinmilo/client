/* eslint-disable */
import * as Types from '../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { LanguageFragmentDoc } from '../../../core/api/generated/language.fragment.generated';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type GetPagesQueryVariables = Types.Exact<{
  params?: Types.InputMaybe<Types.FilterSortPaginateInput>;
}>;


export type GetPagesQuery = { __typename?: 'Query', getPages?: { __typename?: 'PageableList_PageEntity', total: any, result?: Array<{ __typename?: 'PageEntity', id?: string | null, slug?: string | null, callText?: string | null, callUrl?: string | null, isLanding?: boolean | null, translatables?: Array<{ __typename?: 'PageTranslatableEntity', id?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null> | null } | null };

export const GetPagesDocument = gql`
    query getPages($params: FilterSortPaginateInput) {
  getPages(params: $params) {
    result {
      id
      slug
      callText
      callUrl
      isLanding
      translatables {
        id
        name
        language {
          ...Language
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
  export class GetPagesGQL extends Apollo.Query<GetPagesQuery, GetPagesQueryVariables> {
    override document = GetPagesDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }