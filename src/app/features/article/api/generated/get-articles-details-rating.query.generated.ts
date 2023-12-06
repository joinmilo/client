/* eslint-disable */
import * as Types from '../../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { AnalyticsDtoFragmentDoc } from '../../../../core/api/generated/analytics.fragment.generated';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type GetArticleDetailsRatingQueryVariables = Types.Exact<{
  entity?: Types.InputMaybe<Types.ArticleEntityInput>;
  startDate?: Types.InputMaybe<Types.Scalars['OffsetDateTime']['input']>;
  endDate?: Types.InputMaybe<Types.Scalars['OffsetDateTime']['input']>;
  interval?: Types.InputMaybe<Types.IntervalFilter>;
}>;


export type GetArticleDetailsRatingQuery = { __typename?: 'Query', getArticle?: { __typename?: 'ArticleEntity', id?: string | null, ratingStatistics?: Array<{ __typename?: 'AnalyticsDto', average?: number | null, name?: string | null, sum?: number | null, series?: Array<{ __typename?: 'AnalyticsEntry', name?: string | null, value?: number | null } | null> | null } | null> | null } | null };

export const GetArticleDetailsRatingDocument = gql`
    query getArticleDetailsRating($entity: ArticleEntityInput, $startDate: OffsetDateTime, $endDate: OffsetDateTime, $interval: IntervalFilter) {
  getArticle(entity: $entity) {
    id
    ratingStatistics(startDate: $startDate, endDate: $endDate, interval: $interval) {
      ...AnalyticsDto
    }
  }
}
    ${AnalyticsDtoFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetArticleDetailsRatingGQL extends Apollo.Query<GetArticleDetailsRatingQuery, GetArticleDetailsRatingQueryVariables> {
    override document = GetArticleDetailsRatingDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }