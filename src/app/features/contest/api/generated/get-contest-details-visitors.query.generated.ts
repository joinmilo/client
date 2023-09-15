/* eslint-disable */
import * as Types from '../../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { AnalyticsDtoFragmentDoc } from '../../../../core/api/generated/analytics.fragment.generated';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type GetContestDetailsVisitorQueryVariables = Types.Exact<{
  entity?: Types.InputMaybe<Types.ContestEntityInput>;
  startDate?: Types.InputMaybe<Types.Scalars['OffsetDateTime']>;
  endDate?: Types.InputMaybe<Types.Scalars['OffsetDateTime']>;
  interval?: Types.InputMaybe<Types.IntervalFilter>;
}>;


export type GetContestDetailsVisitorQuery = { __typename?: 'Query', getContest?: { __typename?: 'ContestEntity', id?: string | null, visitorStatistics?: Array<{ __typename?: 'AnalyticsDto', average?: number | null, name?: string | null, sum?: number | null, series?: Array<{ __typename?: 'AnalyticsEntry', name?: string | null, value?: number | null } | null> | null } | null> | null } | null };

export const GetContestDetailsVisitorDocument = gql`
    query getContestDetailsVisitor($entity: ContestEntityInput, $startDate: OffsetDateTime, $endDate: OffsetDateTime, $interval: IntervalFilter) {
  getContest(entity: $entity) {
    id
    visitorStatistics(startDate: $startDate, endDate: $endDate, interval: $interval) {
      ...AnalyticsDto
    }
  }
}
    ${AnalyticsDtoFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetContestDetailsVisitorGQL extends Apollo.Query<GetContestDetailsVisitorQuery, GetContestDetailsVisitorQueryVariables> {
    override document = GetContestDetailsVisitorDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }