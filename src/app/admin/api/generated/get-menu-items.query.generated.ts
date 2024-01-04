/* eslint-disable */
import * as Types from '../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { LanguageFragmentDoc } from '../../../core/api/generated/language.fragment.generated';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type GetMenuItemsQueryVariables = Types.Exact<{
  params?: Types.InputMaybe<Types.FilterSortPaginateInput>;
}>;


export type GetMenuItemsQuery = { __typename?: 'Query', getMenuItems?: { __typename?: 'PageableList_MenuItemEntity', total: any, result?: Array<{ __typename?: 'MenuItemEntity', id?: string | null, header?: boolean | null, translatables?: Array<{ __typename?: 'MenuItemTranslatableEntity', id?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null, subMenuItems?: Array<{ __typename?: 'MenuItemEntity', id?: string | null, header?: boolean | null, icon?: string | null, order?: number | null, translatables?: Array<{ __typename?: 'MenuItemTranslatableEntity', id?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null> | null } | null> | null } | null };

export const GetMenuItemsDocument = gql`
    query getMenuItems($params: FilterSortPaginateInput) {
  getMenuItems(params: $params) {
    result {
      id
      header
      translatables {
        id
        name
        language {
          ...Language
        }
      }
      subMenuItems {
        id
        header
        icon
        order
        translatables {
          id
          name
          language {
            ...Language
          }
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
  export class GetMenuItemsGQL extends Apollo.Query<GetMenuItemsQuery, GetMenuItemsQueryVariables> {
    override document = GetMenuItemsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }