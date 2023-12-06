/* eslint-disable */
import * as Types from '../../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { AnalyticsDtoFragmentDoc } from '../../../../core/api/generated/analytics.fragment.generated';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type GetDealDetailsSearchStatisticsQueryVariables = Types.Exact<{
  entity?: Types.InputMaybe<Types.DealEntityInput>;
  startDate?: Types.InputMaybe<Types.Scalars['OffsetDateTime']['input']>;
  endDate?: Types.InputMaybe<Types.Scalars['OffsetDateTime']['input']>;
  interval?: Types.InputMaybe<Types.IntervalFilter>;
}>;


export type GetDealDetailsSearchStatisticsQuery = { __typename?: 'Query', getDeal?: { __typename?: 'DealEntity', id?: string | null, searchStatistics?: Array<{ __typename?: 'AnalyticsDto', average?: number | null, name?: string | null, sum?: number | null, series?: Array<{ __typename?: 'AnalyticsEntry', name?: string | null, value?: number | null } | null> | null } | null> | null } | null };

export const GetDealDetailsSearchStatisticsDocument = gql`
    query getDealDetailsSearchStatistics($entity: DealEntityInput, $startDate: OffsetDateTime, $endDate: OffsetDateTime, $interval: IntervalFilter) {
  getDeal(entity: $entity) {
    id
    searchStatistics(startDate: $startDate, endDate: $endDate, interval: $interval) {
      ...AnalyticsDto
    }
  }
}
    ${AnalyticsDtoFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetDealDetailsSearchStatisticsGQL extends Apollo.Query<GetDealDetailsSearchStatisticsQuery, GetDealDetailsSearchStatisticsQueryVariables> {
    override document = GetDealDetailsSearchStatisticsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }