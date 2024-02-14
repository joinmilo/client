/* eslint-disable */
import * as Types from '../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type GetPluginQueryVariables = Types.Exact<{
  entity?: Types.InputMaybe<Types.PluginEntityInput>;
}>;


export type GetPluginQuery = { __typename?: 'Query', getPlugin?: { __typename?: 'PluginEntity', id?: string | null, code?: string | null, icon?: string | null, name?: string | null, menuItems?: Array<{ __typename?: 'MenuItemEntity', id?: string | null } | null> | null } | null };

export const GetPluginDocument = gql`
    query getPlugin($entity: PluginEntityInput) {
  getPlugin(entity: $entity) {
    id
    code
    icon
    menuItems {
      id
    }
    name
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetPluginGQL extends Apollo.Query<GetPluginQuery, GetPluginQueryVariables> {
    override document = GetPluginDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }