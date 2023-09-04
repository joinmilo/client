/* eslint-disable */
import * as Types from '../../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { LanguageFragmentDoc } from '../../../../core/api/generated/language.fragment.generated';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type GetDealsQueryVariables = Types.Exact<{
  params?: Types.InputMaybe<Types.FilterSortPaginateInput>;
}>;


export type GetDealsQuery = { __typename?: 'Query', getDeals?: { __typename?: 'PageableList_DealEntity', total: any, result?: Array<{ __typename?: 'DealEntity', id?: string | null, created?: any | null, modified?: any | null, slug?: string | null, sponsored?: boolean | null, category?: { __typename?: 'DealCategoryEntity', id?: string | null, icon?: string | null, color?: string | null, translatables?: Array<{ __typename?: 'DealCategoryTranslatableEntity', id?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null, translatables?: Array<{ __typename?: 'DealTranslatableEntity', id?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null> | null } | null };

export const GetDealsDocument = gql`
    query getDeals($params: FilterSortPaginateInput) {
  getDeals(params: $params) {
    result {
      id
      created
      modified
      slug
      sponsored
      category {
        id
        icon
        color
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
  export class GetDealsGQL extends Apollo.Query<GetDealsQuery, GetDealsQueryVariables> {
    override document = GetDealsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }