/* eslint-disable */
import * as Types from '../../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type GetEventCategoryQueryVariables = Types.Exact<{
  entity?: Types.InputMaybe<Types.EventCategoryEntityInput>;
}>;


export type GetEventCategoryQuery = { __typename?: 'Query', getEventCategory?: { __typename?: 'EventCategoryEntity', id?: string | null, name?: string | null, icon?: string | null, color?: string | null } | null };

export const GetEventCategoryDocument = gql`
    query getEventCategory($entity: EventCategoryEntityInput) {
  getEventCategory(entity: $entity) {
    id
    name
    icon
    color
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetEventCategoryGQL extends Apollo.Query<GetEventCategoryQuery, GetEventCategoryQueryVariables> {
    override document = GetEventCategoryDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }