/* eslint-disable */
import * as Types from '../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { PluginFragmentDoc } from '../../../core/api/generated/feature.fragment.generated';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type GetPluginQueryVariables = Types.Exact<{
  entity?: Types.InputMaybe<Types.PluginEntityInput>;
}>;


export type GetPluginQuery = { __typename?: 'Query', getPlugin?: { __typename?: 'PluginEntity', id?: string | null, active?: boolean | null, icon?: string | null, name?: string | null, code?: string | null } | null };

export const GetPluginDocument = gql`
    query getPlugin($entity: PluginEntityInput) {
  getPlugin(entity: $entity) {
    ...Plugin
  }
}
    ${PluginFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetPluginGQL extends Apollo.Query<GetPluginQuery, GetPluginQueryVariables> {
    override document = GetPluginDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }