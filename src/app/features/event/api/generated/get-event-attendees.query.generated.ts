/* eslint-disable */
import * as Types from '../../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type GetEventAttendeesQueryVariables = Types.Exact<{
  params?: Types.InputMaybe<Types.FilterSortPaginateInput>;
}>;


export type GetEventAttendeesQuery = { __typename?: 'Query', getEventAttendees?: { __typename?: 'PageableList_EventAttendeeEntity', result?: Array<{ __typename?: 'EventAttendeeEntity', id?: string | null, approved?: boolean | null, userContext?: { __typename?: 'UserContextEntity', id?: string | null, user?: { __typename?: 'UserEntity', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null } | null } | null, configuration?: { __typename?: 'EventAttendeeConfigurationEntity', id?: string | null, events?: Array<{ __typename?: 'EventEntity', id?: string | null, slug?: string | null } | null> | null } | null } | null> | null } | null };

export const GetEventAttendeesDocument = gql`
    query getEventAttendees($params: FilterSortPaginateInput) {
  getEventAttendees(params: $params) {
    result {
      id
      approved
      userContext {
        id
        user {
          id
          firstName
          lastName
          email
        }
      }
      configuration {
        id
        events {
          id
          slug
        }
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetEventAttendeesGQL extends Apollo.Query<GetEventAttendeesQuery, GetEventAttendeesQueryVariables> {
    override document = GetEventAttendeesDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }