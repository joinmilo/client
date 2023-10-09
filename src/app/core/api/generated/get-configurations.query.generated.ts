/* eslint-disable */
import * as Types from './schema';

import { gql } from 'apollo-angular';
import { MediaFragmentDoc } from './media.fragment.generated';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type GetConfigurationsQueryVariables = Types.Exact<{
  params?: Types.InputMaybe<Types.FilterSortPaginateInput>;
}>;


export type GetConfigurationsQuery = { __typename?: 'Query', getConfigurations?: { __typename?: 'PageableList_ConfigurationEntity', total: any, result?: Array<{ __typename?: 'ConfigurationEntity', id?: string | null, code?: string | null, value?: string | null, media?: { __typename?: 'MediaEntity', id?: string | null, created?: any | null, extension?: string | null, mimeType?: string | null, modified?: any | null, name?: string | null, size?: any | null, url?: string | null, base64?: string | null, attribution?: { __typename?: 'MediaAttributionEntity', id?: string | null, title?: string | null, author?: string | null, source?: string | null, license?: string | null } | null } | null } | null> | null } | null };

export const GetConfigurationsDocument = gql`
    query getConfigurations($params: FilterSortPaginateInput) {
  getConfigurations(params: $params) {
    result {
      id
      code
      value
      media {
        ...Media
      }
    }
    total
  }
}
    ${MediaFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetConfigurationsGQL extends Apollo.Query<GetConfigurationsQuery, GetConfigurationsQueryVariables> {
    override document = GetConfigurationsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }