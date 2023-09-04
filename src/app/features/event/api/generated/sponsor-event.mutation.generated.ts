/* eslint-disable */
import * as Types from '../../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type SponsorEventMutationVariables = Types.Exact<{
  eventId?: Types.InputMaybe<Types.Scalars['String']>;
}>;


export type SponsorEventMutation = { __typename?: 'Mutation', sponsorEvent?: boolean | null };

export const SponsorEventDocument = gql`
    mutation sponsorEvent($eventId: String) {
  sponsorEvent(eventId: $eventId)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class SponsorEventGQL extends Apollo.Mutation<SponsorEventMutation, SponsorEventMutationVariables> {
    override document = SponsorEventDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }