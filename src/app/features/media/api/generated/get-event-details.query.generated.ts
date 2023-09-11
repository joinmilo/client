/* eslint-disable */
import * as Types from '../../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type GetEventDetailsQueryVariables = Types.Exact<{
  entity?: Types.InputMaybe<Types.EventEntityInput>;
  scheduleBegin?: Types.InputMaybe<Types.Scalars['OffsetDateTime']>;
  scheduleEnd?: Types.InputMaybe<Types.Scalars['OffsetDateTime']>;
}>;


export type GetEventDetailsQuery = { __typename?: 'Query', getEvent?: { __typename?: 'EventEntity' } | null };

export const GetEventDetailsDocument = gql`
    query getEventDetails($entity: EventEntityInput, $scheduleBegin: OffsetDateTime, $scheduleEnd: OffsetDateTime) {
  getEvent(entity: $entity) {
    ...EventDetails
  }
}
    ${EventDetailsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetEventDetailsGQL extends Apollo.Query<GetEventDetailsQuery, GetEventDetailsQueryVariables> {
    override document = GetEventDetailsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }