/* eslint-disable */
import * as Types from '../../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { AnalyticsDtoFragmentDoc } from '../../../../core/api/generated/analytics.fragment.generated';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type GetDealDetailsVisitorQueryVariables = Types.Exact<{
  entity?: Types.InputMaybe<Types.DealEntityInput>;
  startDate?: Types.InputMaybe<Types.Scalars['OffsetDateTime']>;
  endDate?: Types.InputMaybe<Types.Scalars['OffsetDateTime']>;
  interval?: Types.InputMaybe<Types.IntervalFilter>;
}>;


export type GetDealDetailsVisitorQuery = { __typename?: 'Query', getDeal?: { __typename?: 'DealEntity', id?: string | null, visitorStatistics?: Array<{ __typename?: 'AnalyticsDto', average?: number | null, name?: string | null, sum?: number | null, series?: Array<{ __typename?: 'AnalyticsEntry', name?: string | null, value?: number | null } | null> | null } | null> | null } | null };

export const GetDealDetailsVisitorDocument = gql`
    query getDealDetailsVisitor($entity: DealEntityInput, $startDate: OffsetDateTime, $endDate: OffsetDateTime, $interval: IntervalFilter) {
  getDeal(entity: $entity) {
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
  export class GetDealDetailsVisitorGQL extends Apollo.Query<GetDealDetailsVisitorQuery, GetDealDetailsVisitorQueryVariables> {
    override document = GetDealDetailsVisitorDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }