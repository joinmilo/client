/* eslint-disable */
import * as Types from '../../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type SaveArticleCategoryMutationVariables = Types.Exact<{
  entity: Types.ArticleCategoryEntityInput;
}>;


export type SaveArticleCategoryMutation = { __typename?: 'Mutation', saveArticleCategory?: { __typename?: 'ArticleCategoryEntity', id?: string | null } | null };

export const SaveArticleCategoryDocument = gql`
    mutation saveArticleCategory($entity: ArticleCategoryEntityInput!) {
  saveArticleCategory(entity: $entity) {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class SaveArticleCategoryGQL extends Apollo.Mutation<SaveArticleCategoryMutation, SaveArticleCategoryMutationVariables> {
    override document = SaveArticleCategoryDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }