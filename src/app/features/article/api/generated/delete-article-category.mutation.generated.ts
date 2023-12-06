/* eslint-disable */
import * as Types from '../../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type DeleteArticleCategoryMutationVariables = Types.Exact<{
  id?: Types.InputMaybe<Types.Scalars['String']['input']>;
}>;


export type DeleteArticleCategoryMutation = { __typename?: 'Mutation', deleteArticleCategory?: boolean | null };

export const DeleteArticleCategoryDocument = gql`
    mutation deleteArticleCategory($id: String) {
  deleteArticleCategory(id: $id)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteArticleCategoryGQL extends Apollo.Mutation<DeleteArticleCategoryMutation, DeleteArticleCategoryMutationVariables> {
    override document = DeleteArticleCategoryDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }