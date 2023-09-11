/* eslint-disable */
import * as Types from '../../../../core/api/generated/schema';

import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
import { gql } from 'apollo-angular';
import { AnalyticsDtoFragmentDoc } from '../../../../core/api/generated/analytics.fragment.generated';
export type GetEventDetailsSearchStatisticsQueryVariables = Types.Exact<{
  entity?: Types.InputMaybe<Types.EventEntityInput>;
  startDate?: Types.InputMaybe<Types.Scalars['OffsetDateTime']>;
  endDate?: Types.InputMaybe<Types.Scalars['OffsetDateTime']>;
}>;


export type GetEventDetailsSearchStatisticsQuery = { __typename?: 'Query', getEvent?: { __typename?: 'EventEntity', id?: string | null, searchStatistics?: Array<{ __typename?: 'AnalyticsDto', average?: number | null, name?: string | null, sum?: number | null, series?: Array<{ __typename?: 'AnalyticsEntry', name?: string | null, value?: number | null } | null> | null } | null> | null } | null };

export const GetEventDetailsSearchStatisticsDocument = gql`
    query getEventDetailsSearchStatistics($entity: EventEntityInput, $startDate: OffsetDateTime, $endDate: OffsetDateTime) {
  getEvent(entity: $entity) {
    id
    searchStatistics(startDate: $startDate, endDate: $endDate) {
      ...AnalyticsDto
    }
  }
}
    ${AnalyticsDtoFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetEventDetailsSearchStatisticsGQL extends Apollo.Query<GetEventDetailsSearchStatisticsQuery, GetEventDetailsSearchStatisticsQueryVariables> {
    override document = GetEventDetailsSearchStatisticsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }