/* eslint-disable */
import * as Types from '../../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { GoogleSearchDtoFragmentDoc } from '../../../../core/api/generated/google-search.fragment.generated';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type GetEventDetailsGoogleSearchQueryVariables = Types.Exact<{
  entity?: Types.InputMaybe<Types.EventEntityInput>;
}>;


export type GetEventDetailsGoogleSearchQuery = { __typename?: 'Query', getEvent?: { __typename?: 'EventEntity', id?: string | null, googleSearchEventDetails?: Array<{ __typename?: 'GoogleSearchDto', name?: string | null, value?: number | null, entries?: Array<{ __typename?: 'AnalyticsEntry', name?: string | null, value?: number | null } | null> | null } | null> | null } | null };

export const GetEventDetailsGoogleSearchDocument = gql`
    query getEventDetailsGoogleSearch($entity: EventEntityInput) {
  getEvent(entity: $entity) {
    id
    googleSearchEventDetails {
      ...GoogleSearchDto
    }
  }
}
    ${GoogleSearchDtoFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetEventDetailsGoogleSearchGQL extends Apollo.Query<GetEventDetailsGoogleSearchQuery, GetEventDetailsGoogleSearchQueryVariables> {
    override document = GetEventDetailsGoogleSearchDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }