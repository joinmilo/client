/* eslint-disable */
import * as Types from '../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type ChangePluginActivationMutationVariables = Types.Exact<{
  pluginId?: Types.InputMaybe<Types.Scalars['String']['input']>;
  active?: Types.InputMaybe<Types.Scalars['Boolean']['input']>;
}>;


export type ChangePluginActivationMutation = { __typename?: 'Mutation', changePluginActivation?: boolean | null };

export const ChangePluginActivationDocument = gql`
    mutation changePluginActivation($pluginId: String, $active: Boolean) {
  changePluginActivation(pluginId: $pluginId, active: $active)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ChangePluginActivationGQL extends Apollo.Mutation<ChangePluginActivationMutation, ChangePluginActivationMutationVariables> {
    override document = ChangePluginActivationDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }