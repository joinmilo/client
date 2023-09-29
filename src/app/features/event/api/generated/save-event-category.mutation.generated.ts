/* eslint-disable */
import * as Types from '../../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type SaveEventCategoryMutationVariables = Types.Exact<{
  entity: Types.EventCategoryEntityInput;
}>;


export type SaveEventCategoryMutation = { __typename?: 'Mutation', saveEventCategory?: { __typename?: 'EventCategoryEntity', id?: string | null } | null };

export const SaveEventCategoryDocument = gql`
    mutation saveEventCategory($entity: EventCategoryEntityInput!) {
  saveEventCategory(entity: $entity) {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class SaveEventCategoryGQL extends Apollo.Mutation<SaveEventCategoryMutation, SaveEventCategoryMutationVariables> {
    override document = SaveEventCategoryDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }