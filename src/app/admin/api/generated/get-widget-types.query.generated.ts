/* eslint-disable */
import * as Types from '../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { LanguageFragmentDoc } from '../../../core/api/generated/language.fragment.generated';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type GetWidgetTypesQueryVariables = Types.Exact<{
  params?: Types.InputMaybe<Types.FilterSortPaginateInput>;
}>;


export type GetWidgetTypesQuery = { __typename?: 'Query', getPageWidgetTypes?: { __typename?: 'PageableList_PageWidgetTypeEntity', total: any, result?: Array<{ __typename?: 'PageWidgetTypeEntity', id?: string | null, code?: string | null, translatables?: Array<{ __typename?: 'PageWidgetTypeTranslatableEntity', id?: string | null, description?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null> | null } | null };

export const GetWidgetTypesDocument = gql`
    query getWidgetTypes($params: FilterSortPaginateInput) {
  getPageWidgetTypes(params: $params) {
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
  export class GetWidgetTypesGQL extends Apollo.Query<GetWidgetTypesQuery, GetWidgetTypesQueryVariables> {
    override document = GetWidgetTypesDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }