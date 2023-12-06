/* eslint-disable */
import * as Types from './schema';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type RemoveFavoriteEventMutationVariables = Types.Exact<{
  eventId?: Types.InputMaybe<Types.Scalars['String']['input']>;
}>;


export type RemoveFavoriteEventMutation = { __typename?: 'Mutation', removeFavoriteEvent?: { __typename?: 'UserContextEntity', id?: string | null } | null };

export const RemoveFavoriteEventDocument = gql`
    mutation removeFavoriteEvent($eventId: String) {
  removeFavoriteEvent(eventId: $eventId) {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class RemoveFavoriteEventGQL extends Apollo.Mutation<RemoveFavoriteEventMutation, RemoveFavoriteEventMutationVariables> {
    override document = RemoveFavoriteEventDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }