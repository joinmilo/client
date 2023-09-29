/* eslint-disable */
import * as Types from '../../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type SaveInfoMediaCategoryMutationVariables = Types.Exact<{
  entity: Types.InfoMediaCategoryEntityInput;
}>;


export type SaveInfoMediaCategoryMutation = { __typename?: 'Mutation', saveInfoMediaCategory?: { __typename?: 'InfoMediaCategoryEntity', id?: string | null } | null };

export const SaveInfoMediaCategoryDocument = gql`
    mutation saveInfoMediaCategory($entity: InfoMediaCategoryEntityInput!) {
  saveInfoMediaCategory(entity: $entity) {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class SaveInfoMediaCategoryGQL extends Apollo.Mutation<SaveInfoMediaCategoryMutation, SaveInfoMediaCategoryMutationVariables> {
    override document = SaveInfoMediaCategoryDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }