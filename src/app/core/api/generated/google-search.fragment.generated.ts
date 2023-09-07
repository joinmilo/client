/* eslint-disable */
import * as Types from './schema';

import { gql } from 'apollo-angular';
export type GoogleSearchDtoFragment = { __typename?: 'GoogleSearchDto', name?: string | null, value?: number | null, entries?: Array<{ __typename?: 'AnalyticsEntry', name?: string | null, value?: number | null } | null> | null };

export const GoogleSearchDtoFragmentDoc = gql`
    fragment GoogleSearchDto on GoogleSearchDto {
  name
  value
  entries {
    name
    value
  }
}
    `;