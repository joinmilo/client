/* eslint-disable */
import * as Types from '../../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { AnalyticsDtoFragmentDoc } from '../../../../core/api/generated/analytics.fragment.generated';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type GetContestDetailsSearchStatisticsQueryVariables = Types.Exact<{
  entity?: Types.InputMaybe<Types.ContestEntityInput>;
  startDate?: Types.InputMaybe<Types.Scalars['OffsetDateTime']>;
  endDate?: Types.InputMaybe<Types.Scalars['OffsetDateTime']>;
  interval?: Types.InputMaybe<Types.IntervalFilter>;
}>;


export type GetContestDetailsSearchStatisticsQuery = { __typename?: 'Query', getContest?: { __typename?: 'ContestEntity', id?: string | null, searchStatistics?: Array<{ __typename?: 'AnalyticsDto', average?: number | null, name?: string | null, sum?: number | null, series?: Array<{ __typename?: 'AnalyticsEntry', name?: string | null, value?: number | null } | null> | null } | null> | null } | null };

export const GetContestDetailsSearchStatisticsDocument = gql`
    query getContestDetailsSearchStatistics($entity: ContestEntityInput, $startDate: OffsetDateTime, $endDate: OffsetDateTime, $interval: IntervalFilter) {
  getContest(entity: $entity) {
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
  export class GetContestDetailsSearchStatisticsGQL extends Apollo.Query<GetContestDetailsSearchStatisticsQuery, GetContestDetailsSearchStatisticsQueryVariables> {
    override document = GetContestDetailsSearchStatisticsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }