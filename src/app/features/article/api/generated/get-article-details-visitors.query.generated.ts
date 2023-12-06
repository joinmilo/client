/* eslint-disable */
import * as Types from '../../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { AnalyticsDtoFragmentDoc } from '../../../../core/api/generated/analytics.fragment.generated';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type GetArticleDetailsVisitorQueryVariables = Types.Exact<{
  entity?: Types.InputMaybe<Types.ArticleEntityInput>;
  startDate?: Types.InputMaybe<Types.Scalars['OffsetDateTime']['input']>;
  endDate?: Types.InputMaybe<Types.Scalars['OffsetDateTime']['input']>;
  interval?: Types.InputMaybe<Types.IntervalFilter>;
}>;


export type GetArticleDetailsVisitorQuery = { __typename?: 'Query', getArticle?: { __typename?: 'ArticleEntity', id?: string | null, visitorStatistics?: Array<{ __typename?: 'AnalyticsDto', average?: number | null, name?: string | null, sum?: number | null, series?: Array<{ __typename?: 'AnalyticsEntry', name?: string | null, value?: number | null } | null> | null } | null> | null } | null };

export const GetArticleDetailsVisitorDocument = gql`
    query getArticleDetailsVisitor($entity: ArticleEntityInput, $startDate: OffsetDateTime, $endDate: OffsetDateTime, $interval: IntervalFilter) {
  getArticle(entity: $entity) {
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
  export class GetArticleDetailsVisitorGQL extends Apollo.Query<GetArticleDetailsVisitorQuery, GetArticleDetailsVisitorQueryVariables> {
    override document = GetArticleDetailsVisitorDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }