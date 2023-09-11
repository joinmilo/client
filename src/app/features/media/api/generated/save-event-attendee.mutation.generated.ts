/* eslint-disable */
import * as Types from '../../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type SaveEventAttendeeMutationVariables = Types.Exact<{
  entity: Types.EventAttendeeEntityInput;
}>;


export type SaveEventAttendeeMutation = { __typename?: 'Mutation', saveEventAttendee?: { __typename?: 'EventAttendeeEntity', id?: string | null } | null };

export const SaveEventAttendeeDocument = gql`
    mutation saveEventAttendee($entity: EventAttendeeEntityInput!) {
  saveEventAttendee(entity: $entity) {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class SaveEventAttendeeGQL extends Apollo.Mutation<SaveEventAttendeeMutation, SaveEventAttendeeMutationVariables> {
    override document = SaveEventAttendeeDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }