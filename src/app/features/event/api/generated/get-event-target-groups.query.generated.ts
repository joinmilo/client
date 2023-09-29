/* eslint-disable */
import * as Types from '../../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type GetEventTargetGroupsQueryVariables = Types.Exact<{
  params?: Types.InputMaybe<Types.FilterSortPaginateInput>;
}>;


export type GetEventTargetGroupsQuery = { __typename?: 'Query', getEventTargetGroups?: { __typename?: 'PageableList_EventTargetGroupEntity', total: any, result?: Array<{ __typename?: 'EventTargetGroupEntity', id?: string | null, translatables?: Array<{ __typename?: 'EventTargetGroupTranslatableEntity', id?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null> | null } | null };

export const GetEventTargetGroupsDocument = gql`
    query getEventTargetGroups($params: FilterSortPaginateInput) {
  getEventTargetGroups(params: $params) {
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
  export class GetEventTargetGroupsGQL extends Apollo.Query<GetEventTargetGroupsQuery, GetEventTargetGroupsQueryVariables> {
    override document = GetEventTargetGroupsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }