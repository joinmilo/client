/* eslint-disable */
import * as Types from '../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { AnalyticsDtoFragmentDoc } from '../../../core/api/generated/analytics.fragment.generated';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type GetPageDetailsSearchStatisticsQueryVariables = Types.Exact<{
  entity?: Types.InputMaybe<Types.PageEntityInput>;
  startDate?: Types.InputMaybe<Types.Scalars['OffsetDateTime']>;
  endDate?: Types.InputMaybe<Types.Scalars['OffsetDateTime']>;
  interval?: Types.InputMaybe<Types.IntervalFilter>;
}>;


export type GetPageDetailsSearchStatisticsQuery = { __typename?: 'Query', getPage?: { __typename?: 'PageEntity', id?: string | null, searchStatistics?: Array<{ __typename?: 'AnalyticsDto', average?: number | null, name?: string | null, sum?: number | null, series?: Array<{ __typename?: 'AnalyticsEntry', name?: string | null, value?: number | null } | null> | null } | null> | null } | null };

export const GetPageDetailsSearchStatisticsDocument = gql`
    query getPageDetailsSearchStatistics($entity: PageEntityInput, $startDate: OffsetDateTime, $endDate: OffsetDateTime, $interval: IntervalFilter) {
  getPage(entity: $entity) {
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
  export class GetPageDetailsSearchStatisticsGQL extends Apollo.Query<GetPageDetailsSearchStatisticsQuery, GetPageDetailsSearchStatisticsQueryVariables> {
    override document = GetPageDetailsSearchStatisticsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }