/* eslint-disable */
import * as Types from '../../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type SaveInfoMediumMutationVariables = Types.Exact<{
  entity: Types.InfoMediaEntityInput;
}>;


export type SaveInfoMediumMutation = { __typename?: 'Mutation', saveInfoMedium?: { __typename?: 'InfoMediaEntity', id?: string | null } | null };

export const SaveInfoMediumDocument = gql`
    mutation saveInfoMedium($entity: InfoMediaEntityInput!) {
  saveInfoMedium(entity: $entity) {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class SaveInfoMediumGQL extends Apollo.Mutation<SaveInfoMediumMutation, SaveInfoMediumMutationVariables> {
    override document = SaveInfoMediumDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }