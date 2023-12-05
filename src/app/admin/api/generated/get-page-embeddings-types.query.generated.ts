/* eslint-disable */
import * as Types from '../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { LanguageFragmentDoc } from '../../../core/api/generated/language.fragment.generated';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type GetEmbeddingTypesQueryVariables = Types.Exact<{
  params?: Types.InputMaybe<Types.FilterSortPaginateInput>;
}>;


export type GetEmbeddingTypesQuery = { __typename?: 'Query', getPageEmbeddingTypes?: { __typename?: 'PageableList_PageEmbeddingTypeEntity', total: any, result?: Array<{ __typename?: 'PageEmbeddingTypeEntity', id?: string | null, code?: string | null, translatables?: Array<{ __typename?: 'PageEmbeddingTypeTranslatableEntity', id?: string | null, description?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null> | null } | null };

export const GetEmbeddingTypesDocument = gql`
    query getEmbeddingTypes($params: FilterSortPaginateInput) {
  getPageEmbeddingTypes(params: $params) {
    result {
      id
      code
      translatables {
        id
        description
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
  export class GetEmbeddingTypesGQL extends Apollo.Query<GetEmbeddingTypesQuery, GetEmbeddingTypesQueryVariables> {
    override document = GetEmbeddingTypesDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }