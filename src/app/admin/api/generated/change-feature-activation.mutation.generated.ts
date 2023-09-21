/* eslint-disable */
import * as Types from '../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type ChangeFeatureActivationMutationVariables = Types.Exact<{
  featureId?: Types.InputMaybe<Types.Scalars['String']>;
  active?: Types.InputMaybe<Types.Scalars['Boolean']>;
}>;


export type ChangeFeatureActivationMutation = { __typename?: 'Mutation', changeActivation?: boolean | null };

export const ChangeFeatureActivationDocument = gql`
    mutation changeFeatureActivation($featureId: String, $active: Boolean) {
  changeActivation(featureId: $featureId, active: $active)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ChangeFeatureActivationGQL extends Apollo.Mutation<ChangeFeatureActivationMutation, ChangeFeatureActivationMutationVariables> {
    override document = ChangeFeatureActivationDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }