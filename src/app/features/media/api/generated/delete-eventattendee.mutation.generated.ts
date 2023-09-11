/* eslint-disable */
import * as Types from '../../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type DeleteEventAttendeeMutationVariables = Types.Exact<{
  id?: Types.InputMaybe<Types.Scalars['String']>;
}>;


export type DeleteEventAttendeeMutation = { __typename?: 'Mutation', deleteEventAttendee?: boolean | null };

export const DeleteEventAttendeeDocument = gql`
    mutation deleteEventAttendee($id: String) {
  deleteEventAttendee(id: $id)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteEventAttendeeGQL extends Apollo.Mutation<DeleteEventAttendeeMutation, DeleteEventAttendeeMutationVariables> {
    override document = DeleteEventAttendeeDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }