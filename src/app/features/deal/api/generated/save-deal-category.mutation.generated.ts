/* eslint-disable */
import * as Types from '../../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type SaveDealCategoryMutationVariables = Types.Exact<{
  entity: Types.DealCategoryEntityInput;
}>;


export type SaveDealCategoryMutation = { __typename?: 'Mutation', saveDealCategory?: { __typename?: 'DealCategoryEntity', id?: string | null } | null };

export const SaveDealCategoryDocument = gql`
    mutation saveDealCategory($entity: DealCategoryEntityInput!) {
  saveDealCategory(entity: $entity) {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class SaveDealCategoryGQL extends Apollo.Mutation<SaveDealCategoryMutation, SaveDealCategoryMutationVariables> {
    override document = SaveDealCategoryDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }