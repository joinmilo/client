/* eslint-disable */
import * as Types from '../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { AnalyticsDtoFragmentDoc } from '../../../core/api/generated/analytics.fragment.generated';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type GetPageDetailsVisitorQueryVariables = Types.Exact<{
  entity?: Types.InputMaybe<Types.PageEntityInput>;
  startDate?: Types.InputMaybe<Types.Scalars['OffsetDateTime']['input']>;
  endDate?: Types.InputMaybe<Types.Scalars['OffsetDateTime']['input']>;
  interval?: Types.InputMaybe<Types.IntervalFilter>;
}>;


export type GetPageDetailsVisitorQuery = { __typename?: 'Query', getPage?: { __typename?: 'PageEntity', id?: string | null, visitorStatistics?: Array<{ __typename?: 'AnalyticsDto', average?: number | null, name?: string | null, sum?: number | null, series?: Array<{ __typename?: 'AnalyticsEntry', name?: string | null, value?: number | null } | null> | null } | null> | null } | null };

export const GetPageDetailsVisitorDocument = gql`
    query getPageDetailsVisitor($entity: PageEntityInput, $startDate: OffsetDateTime, $endDate: OffsetDateTime, $interval: IntervalFilter) {
  getPage(entity: $entity) {
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
  export class GetPageDetailsVisitorGQL extends Apollo.Query<GetPageDetailsVisitorQuery, GetPageDetailsVisitorQueryVariables> {
    override document = GetPageDetailsVisitorDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }