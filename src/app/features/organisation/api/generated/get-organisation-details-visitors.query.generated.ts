/* eslint-disable */
import * as Types from '../../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { AnalyticsDtoFragmentDoc } from '../../../../core/api/generated/analytics.fragment.generated';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type GetOrganisationDetailsVisitorQueryVariables = Types.Exact<{
  entity?: Types.InputMaybe<Types.OrganisationEntityInput>;
  startDate?: Types.InputMaybe<Types.Scalars['OffsetDateTime']>;
  endDate?: Types.InputMaybe<Types.Scalars['OffsetDateTime']>;
  interval?: Types.InputMaybe<Types.IntervalFilter>;
}>;


export type GetOrganisationDetailsVisitorQuery = { __typename?: 'Query', getOrganisation?: { __typename?: 'OrganisationEntity', id?: string | null, visitorStatistics?: Array<{ __typename?: 'AnalyticsDto', average?: number | null, name?: string | null, sum?: number | null, series?: Array<{ __typename?: 'AnalyticsEntry', name?: string | null, value?: number | null } | null> | null } | null> | null } | null };

export const GetOrganisationDetailsVisitorDocument = gql`
    query getOrganisationDetailsVisitor($entity: OrganisationEntityInput, $startDate: OffsetDateTime, $endDate: OffsetDateTime, $interval: IntervalFilter) {
  getOrganisation(entity: $entity) {
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
  export class GetOrganisationDetailsVisitorGQL extends Apollo.Query<GetOrganisationDetailsVisitorQuery, GetOrganisationDetailsVisitorQueryVariables> {
    override document = GetOrganisationDetailsVisitorDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }