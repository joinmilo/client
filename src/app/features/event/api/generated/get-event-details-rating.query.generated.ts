/* eslint-disable */
import * as Types from '../../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { AnalyticsDtoFragmentDoc } from '../../../../core/api/generated/analytics.fragment.generated';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type GetEventDetailsRatingQueryVariables = Types.Exact<{
  entity?: Types.InputMaybe<Types.EventEntityInput>;
  startDate?: Types.InputMaybe<Types.Scalars['OffsetDateTime']['input']>;
  endDate?: Types.InputMaybe<Types.Scalars['OffsetDateTime']['input']>;
  interval?: Types.InputMaybe<Types.IntervalFilter>;
}>;


export type GetEventDetailsRatingQuery = { __typename?: 'Query', getEvent?: { __typename?: 'EventEntity', id?: string | null, ratingStatistics?: Array<{ __typename?: 'AnalyticsDto', average?: number | null, name?: string | null, sum?: number | null, series?: Array<{ __typename?: 'AnalyticsEntry', name?: string | null, value?: number | null } | null> | null } | null> | null } | null };

export const GetEventDetailsRatingDocument = gql`
    query getEventDetailsRating($entity: EventEntityInput, $startDate: OffsetDateTime, $endDate: OffsetDateTime, $interval: IntervalFilter) {
  getEvent(entity: $entity) {
    id
    ratingStatistics(startDate: $startDate, endDate: $endDate, interval: $interval) {
      ...AnalyticsDto
    }
  }
}
    ${AnalyticsDtoFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetEventDetailsRatingGQL extends Apollo.Query<GetEventDetailsRatingQuery, GetEventDetailsRatingQueryVariables> {
    override document = GetEventDetailsRatingDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }