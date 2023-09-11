/* eslint-disable */
import * as Types from '../../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type SaveEventRatingMutationVariables = Types.Exact<{
  entity: Types.EventRatingEntityInput;
}>;


export type SaveEventRatingMutation = { __typename?: 'Mutation', saveEventRating?: { __typename?: 'EventRatingEntity', id?: string | null } | null };

export const SaveEventRatingDocument = gql`
    mutation saveEventRating($entity: EventRatingEntityInput!) {
  saveEventRating(entity: $entity) {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class SaveEventRatingGQL extends Apollo.Mutation<SaveEventRatingMutation, SaveEventRatingMutationVariables> {
    override document = SaveEventRatingDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }