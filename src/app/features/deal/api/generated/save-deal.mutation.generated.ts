/* eslint-disable */
import * as Types from '../../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type SaveDealMutationVariables = Types.Exact<{
  entity: Types.DealEntityInput;
}>;


export type SaveDealMutation = { __typename?: 'Mutation', saveDeal?: { __typename?: 'DealEntity', id?: string | null } | null };

export const SaveDealDocument = gql`
    mutation saveDeal($entity: DealEntityInput!) {
  saveDeal(entity: $entity) {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class SaveDealGQL extends Apollo.Mutation<SaveDealMutation, SaveDealMutationVariables> {
    override document = SaveDealDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }