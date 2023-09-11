/* eslint-disable */
import * as Types from './schema';

import { gql } from 'apollo-angular';
export type AnalyticsDtoFragment = { __typename?: 'AnalyticsDto', average?: number | null, name?: string | null, sum?: number | null, series?: Array<{ __typename?: 'AnalyticsEntry', name?: string | null, value?: number | null } | null> | null };

export const AnalyticsDtoFragmentDoc = gql`
    fragment AnalyticsDto on AnalyticsDto {
  average
  name
  sum
  series {
    name
    value
  }
}
    `;