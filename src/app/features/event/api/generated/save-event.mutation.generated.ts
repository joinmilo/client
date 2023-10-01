/* eslint-disable */
import * as Types from '../../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type SaveEventMutationVariables = Types.Exact<{
  entity: Types.EventEntityInput;
}>;


export type SaveEventMutation = { __typename?: 'Mutation', saveEvent?: { __typename?: 'EventEntity', id?: string | null } | null };

export const SaveEventDocument = gql`
    mutation saveEvent($entity: EventEntityInput!) {
  saveEvent(entity: $entity) {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class SaveEventGQL extends Apollo.Mutation<SaveEventMutation, SaveEventMutationVariables> {
    override document = SaveEventDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }