/* eslint-disable */
import * as Types from '../../../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { PluginFragmentDoc } from '../../../../../core/api/generated/feature.fragment.generated';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type SearchQueryVariables = Types.Exact<{
  params?: Types.InputMaybe<Types.FilterSortPaginateInput>;
}>;


export type SearchQuery = { __typename?: 'Query', search?: Array<{ __typename?: 'SearchDto', slug?: string | null, name?: string | null, plugin?: { __typename?: 'PluginEntity', id?: string | null, active?: boolean | null, icon?: string | null, name?: string | null, code?: string | null } | null } | null> | null };

export const SearchDocument = gql`
    query search($params: FilterSortPaginateInput) {
  search(params: $params) {
    slug
    name
    plugin {
      ...Plugin
    }
  }
}
    ${PluginFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class SearchGQL extends Apollo.Query<SearchQuery, SearchQueryVariables> {
    override document = SearchDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }