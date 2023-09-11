/* eslint-disable */
import * as Types from '../../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type SaveEventCommentMutationVariables = Types.Exact<{
  entity: Types.EventCommentEntityInput;
}>;


export type SaveEventCommentMutation = { __typename?: 'Mutation', saveEventComment?: { __typename?: 'EventCommentEntity', id?: string | null } | null };

export const SaveEventCommentDocument = gql`
    mutation saveEventComment($entity: EventCommentEntityInput!) {
  saveEventComment(entity: $entity) {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class SaveEventCommentGQL extends Apollo.Mutation<SaveEventCommentMutation, SaveEventCommentMutationVariables> {
    override document = SaveEventCommentDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }