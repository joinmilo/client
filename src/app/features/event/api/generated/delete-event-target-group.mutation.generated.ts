/* eslint-disable */
import * as Types from '../../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type DeleteEventTargetGroupMutationVariables = Types.Exact<{
  id?: Types.InputMaybe<Types.Scalars['String']['input']>;
}>;


export type DeleteEventTargetGroupMutation = { __typename?: 'Mutation', deleteEventTargetGroup?: boolean | null };

export const DeleteEventTargetGroupDocument = gql`
    mutation deleteEventTargetGroup($id: String) {
  deleteEventTargetGroup(id: $id)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteEventTargetGroupGQL extends Apollo.Mutation<DeleteEventTargetGroupMutation, DeleteEventTargetGroupMutationVariables> {
    override document = DeleteEventTargetGroupDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }