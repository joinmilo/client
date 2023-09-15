/* eslint-disable */
import * as Types from '../../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { AnalyticsDtoFragmentDoc } from '../../../../core/api/generated/analytics.fragment.generated';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type GetSurveyDetailsSearchStatisticsQueryVariables = Types.Exact<{
  entity?: Types.InputMaybe<Types.SurveyEntityInput>;
  startDate?: Types.InputMaybe<Types.Scalars['OffsetDateTime']>;
  endDate?: Types.InputMaybe<Types.Scalars['OffsetDateTime']>;
  interval?: Types.InputMaybe<Types.IntervalFilter>;
}>;


export type GetSurveyDetailsSearchStatisticsQuery = { __typename?: 'Query', getSurvey?: { __typename?: 'SurveyEntity', id?: string | null, searchStatistics?: Array<{ __typename?: 'AnalyticsDto', average?: number | null, name?: string | null, sum?: number | null, series?: Array<{ __typename?: 'AnalyticsEntry', name?: string | null, value?: number | null } | null> | null } | null> | null } | null };

export const GetSurveyDetailsSearchStatisticsDocument = gql`
    query getSurveyDetailsSearchStatistics($entity: SurveyEntityInput, $startDate: OffsetDateTime, $endDate: OffsetDateTime, $interval: IntervalFilter) {
  getSurvey(entity: $entity) {
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
  export class GetSurveyDetailsSearchStatisticsGQL extends Apollo.Query<GetSurveyDetailsSearchStatisticsQuery, GetSurveyDetailsSearchStatisticsQueryVariables> {
    override document = GetSurveyDetailsSearchStatisticsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }