/* eslint-disable */
import * as Types from '../../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type GetMediaCategoriesQueryVariables = Types.Exact<{
  params?: Types.InputMaybe<Types.FilterSortPaginateInput>;
}>;


export type GetMediaCategoriesQuery = { __typename?: 'Query', getInfoMediaCategories?: { __typename?: 'PageableList_InfoMediaCategoryEntity', total: any, result?: Array<{ __typename?: 'InfoMediaCategoryEntity', id?: string | null, translatables?: Array<{ __typename?: 'InfoMediaCategoryTranslatableEntity', id?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null> | null } | null };

export const GetMediaCategoriesDocument = gql`
    query getMediaCategories($params: FilterSortPaginateInput) {
  getInfoMediaCategories(params: $params) {
    result {
      id
      translatables {
        id
        name
        language {
          id
          locale
          name
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
  export class GetMediaCategoriesGQL extends Apollo.Query<GetMediaCategoriesQuery, GetMediaCategoriesQueryVariables> {
    override document = GetMediaCategoriesDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }