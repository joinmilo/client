/* eslint-disable */
import * as Types from '../../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type GetEventSchedulesQueryVariables = Types.Exact<{
  params?: Types.InputMaybe<Types.FilterSortPaginateInput>;
}>;


export type GetEventSchedulesQuery = { __typename?: 'Query', getEventSchedules?: { __typename?: 'PageableList_EventScheduleEntity', result?: Array<{ __typename?: 'EventScheduleEntity' } | null> | null } | null };

export const GetEventSchedulesDocument = gql`
    query getEventSchedules($params: FilterSortPaginateInput) {
  getEventSchedules(params: $params) {
    result {
      ...Schedule
    }
  }
}
    ${ScheduleFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetEventSchedulesGQL extends Apollo.Query<GetEventSchedulesQuery, GetEventSchedulesQueryVariables> {
    override document = GetEventSchedulesDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }