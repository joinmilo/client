/* eslint-disable */
import * as Types from '../../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type GetEventTargetGroupQueryVariables = Types.Exact<{
  entity?: Types.InputMaybe<Types.EventTargetGroupEntityInput>;
}>;


export type GetEventTargetGroupQuery = { __typename?: 'Query', getEventTargetGroup?: { __typename?: 'EventTargetGroupEntity', id?: string | null, name?: string | null } | null };

export const GetEventTargetGroupDocument = gql`
    query getEventTargetGroup($entity: EventTargetGroupEntityInput) {
  getEventTargetGroup(entity: $entity) {
    id
    name
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetEventTargetGroupGQL extends Apollo.Query<GetEventTargetGroupQuery, GetEventTargetGroupQueryVariables> {
    override document = GetEventTargetGroupDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }