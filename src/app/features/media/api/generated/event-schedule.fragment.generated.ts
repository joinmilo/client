/* eslint-disable */
import * as Types from '../../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
export type ScheduleFragment = { __typename?: 'EventScheduleEntity', id?: string | null, startDate?: any | null, endDate?: any | null };

export const ScheduleFragmentDoc = gql`
    fragment Schedule on EventScheduleEntity {
  id
  startDate
  endDate
}
    `;