/* eslint-disable */
import * as Types from './schema';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type AddFavoriteEventMutationVariables = Types.Exact<{
  eventId?: Types.InputMaybe<Types.Scalars['String']['input']>;
}>;


export type AddFavoriteEventMutation = { __typename?: 'Mutation', addFavoriteEvent?: { __typename?: 'UserContextEntity', id?: string | null } | null };

export const AddFavoriteEventDocument = gql`
    mutation addFavoriteEvent($eventId: String) {
  addFavoriteEvent(eventId: $eventId) {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class AddFavoriteEventGQL extends Apollo.Mutation<AddFavoriteEventMutation, AddFavoriteEventMutationVariables> {
    override document = AddFavoriteEventDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }