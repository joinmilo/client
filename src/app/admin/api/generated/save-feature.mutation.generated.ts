/* eslint-disable */
import * as Types from '../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type SaveFeatureMutationVariables = Types.Exact<{
  entity: Types.FeatureEntityInput;
}>;


export type SaveFeatureMutation = { __typename?: 'Mutation', saveFeature?: { __typename?: 'FeatureEntity', id?: string | null } | null };

export const SaveFeatureDocument = gql`
    mutation saveFeature($entity: FeatureEntityInput!) {
  saveFeature(entity: $entity) {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class SaveFeatureGQL extends Apollo.Mutation<SaveFeatureMutation, SaveFeatureMutationVariables> {
    override document = SaveFeatureDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }