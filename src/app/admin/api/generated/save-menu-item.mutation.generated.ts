/* eslint-disable */
import * as Types from '../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type SaveMenuItemMutationVariables = Types.Exact<{
  entity: Types.MenuItemEntityInput;
}>;


export type SaveMenuItemMutation = { __typename?: 'Mutation', saveMenuItem?: { __typename?: 'MenuItemEntity', id?: string | null } | null };

export const SaveMenuItemDocument = gql`
    mutation saveMenuItem($entity: MenuItemEntityInput!) {
  saveMenuItem(entity: $entity) {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class SaveMenuItemGQL extends Apollo.Mutation<SaveMenuItemMutation, SaveMenuItemMutationVariables> {
    override document = SaveMenuItemDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }