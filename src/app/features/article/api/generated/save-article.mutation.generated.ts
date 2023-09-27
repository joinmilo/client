/* eslint-disable */
import * as Types from '../../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type SaveArticleMutationVariables = Types.Exact<{
  entity: Types.ArticleEntityInput;
}>;


export type SaveArticleMutation = { __typename?: 'Mutation', saveArticle?: { __typename?: 'ArticleEntity', id?: string | null } | null };

export const SaveArticleDocument = gql`
    mutation saveArticle($entity: ArticleEntityInput!) {
  saveArticle(entity: $entity) {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class SaveArticleGQL extends Apollo.Mutation<SaveArticleMutation, SaveArticleMutationVariables> {
    override document = SaveArticleDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }