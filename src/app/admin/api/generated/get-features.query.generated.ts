/* eslint-disable */
import * as Types from '../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { LanguageFragmentDoc } from '../../../core/api/generated/language.fragment.generated';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type GetFeaturesQueryVariables = Types.Exact<{
  params?: Types.InputMaybe<Types.FilterSortPaginateInput>;
}>;


export type GetFeaturesQuery = { __typename?: 'Query', getFeatures?: { __typename?: 'PageableList_FeatureEntity', total: any, result?: Array<{ __typename?: 'FeatureEntity', id?: string | null, active?: boolean | null, icon?: string | null, name?: string | null, code?: string | null, translatables?: Array<{ __typename?: 'FeatureTranslatableEntity', id?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null> | null } | null };

export const GetFeaturesDocument = gql`
    query getFeatures($params: FilterSortPaginateInput) {
  getFeatures(params: $params) {
    result {
      id
      active
      icon
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
    total
  }
}
    ${LanguageFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetFeaturesGQL extends Apollo.Query<GetFeaturesQuery, GetFeaturesQueryVariables> {
    override document = GetFeaturesDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }