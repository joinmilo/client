/* eslint-disable */
import * as Types from '../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type SavePageMutationVariables = Types.Exact<{
  entity: Types.PageEntityInput;
}>;


export type SavePageMutation = { __typename?: 'Mutation', savePage?: { __typename?: 'PageEntity', id?: string | null } | null };

export const SavePageDocument = gql`
    mutation savePage($entity: PageEntityInput!) {
  savePage(entity: $entity) {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class SavePageGQL extends Apollo.Mutation<SavePageMutation, SavePageMutationVariables> {
    override document = SavePageDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }