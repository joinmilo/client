/* eslint-disable */
import * as Types from '../../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type DeleteEventMutationVariables = Types.Exact<{
  id?: Types.InputMaybe<Types.Scalars['String']>;
}>;


export type DeleteEventMutation = { __typename?: 'Mutation', deleteEvent?: boolean | null };

export const DeleteEventDocument = gql`
    mutation deleteEvent($id: String) {
  deleteEvent(id: $id)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteEventGQL extends Apollo.Mutation<DeleteEventMutation, DeleteEventMutationVariables> {
    override document = DeleteEventDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }