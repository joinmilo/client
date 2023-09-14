/* eslint-disable */
import * as Types from '../../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { AnalyticsDtoFragmentDoc } from '../../../../core/api/generated/analytics.fragment.generated';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type GetOrganisationDetailsSearchStatisticsQueryVariables = Types.Exact<{
  entity?: Types.InputMaybe<Types.OrganisationEntityInput>;
  startDate?: Types.InputMaybe<Types.Scalars['OffsetDateTime']>;
  endDate?: Types.InputMaybe<Types.Scalars['OffsetDateTime']>;
  interval?: Types.InputMaybe<Types.IntervalFilter>;
}>;


export type GetOrganisationDetailsSearchStatisticsQuery = { __typename?: 'Query', getOrganisation?: { __typename?: 'OrganisationEntity', id?: string | null, searchStatistics?: Array<{ __typename?: 'AnalyticsDto', average?: number | null, name?: string | null, sum?: number | null, series?: Array<{ __typename?: 'AnalyticsEntry', name?: string | null, value?: number | null } | null> | null } | null> | null } | null };

export const GetOrganisationDetailsSearchStatisticsDocument = gql`
    query getOrganisationDetailsSearchStatistics($entity: OrganisationEntityInput, $startDate: OffsetDateTime, $endDate: OffsetDateTime, $interval: IntervalFilter) {
  getOrganisation(entity: $entity) {
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
  export class GetOrganisationDetailsSearchStatisticsGQL extends Apollo.Query<GetOrganisationDetailsSearchStatisticsQuery, GetOrganisationDetailsSearchStatisticsQueryVariables> {
    override document = GetOrganisationDetailsSearchStatisticsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }