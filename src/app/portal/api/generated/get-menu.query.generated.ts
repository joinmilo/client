/* eslint-disable */
import * as Types from '../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { MenuItemFragmentDoc } from './menu.fragment.generated';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type GetMenuQueryVariables = Types.Exact<{
  parent?: Types.InputMaybe<Types.Scalars['String']['input']>;
}>;


export type GetMenuQuery = { __typename?: 'Query', getMenuItems?: { __typename?: 'PageableList_MenuItemEntity', result?: Array<{ __typename?: 'MenuItemEntity', id?: string | null, header?: boolean | null, order?: number | null, icon?: string | null, plugin?: { __typename?: 'PluginEntity', id?: string | null, active?: boolean | null, icon?: string | null, name?: string | null, code?: string | null } | null, parent?: { __typename?: 'MenuItemEntity', id?: string | null } | null, page?: { __typename?: 'PageEntity', id?: string | null, slug?: string | null } | null, translatables?: Array<{ __typename?: 'MenuItemTranslatableEntity', id?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null, subMenuItems?: Array<{ __typename?: 'MenuItemEntity', id?: string | null, order?: number | null, icon?: string | null, plugin?: { __typename?: 'PluginEntity', id?: string | null, active?: boolean | null, icon?: string | null, name?: string | null, code?: string | null } | null, page?: { __typename?: 'PageEntity', id?: string | null, slug?: string | null } | null, subMenuItems?: Array<{ __typename?: 'MenuItemEntity', id?: string | null } | null> | null, translatables?: Array<{ __typename?: 'MenuItemTranslatableEntity', id?: string | null, name?: string | null, shortDescription?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null> | null } | null> | null } | null };

export const GetMenuDocument = gql`
    query getMenu($parent: String) {
  getMenuItems(
    params: {sort: "order", expression: {entity: {path: "parent.id", value: $parent}}}
  ) {
    result {
      ...MenuItem
    }
  }
}
    ${MenuItemFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetMenuGQL extends Apollo.Query<GetMenuQuery, GetMenuQueryVariables> {
    override document = GetMenuDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }