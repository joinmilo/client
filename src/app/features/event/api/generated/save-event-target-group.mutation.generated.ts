/* eslint-disable */
import * as Types from '../../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type SaveEventTargetGroupMutationVariables = Types.Exact<{
  entity: Types.EventTargetGroupEntityInput;
}>;


export type SaveEventTargetGroupMutation = { __typename?: 'Mutation', saveEventTargetGroup?: { __typename?: 'EventTargetGroupEntity', id?: string | null } | null };

export const SaveEventTargetGroupDocument = gql`
    mutation saveEventTargetGroup($entity: EventTargetGroupEntityInput!) {
  saveEventTargetGroup(entity: $entity) {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class SaveEventTargetGroupGQL extends Apollo.Mutation<SaveEventTargetGroupMutation, SaveEventTargetGroupMutationVariables> {
    override document = SaveEventTargetGroupDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }