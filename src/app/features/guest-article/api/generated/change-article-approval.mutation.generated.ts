/* eslint-disable */
import * as Types from '../../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type ChangeArticleApprovalMutationVariables = Types.Exact<{
  articleId?: Types.InputMaybe<Types.Scalars['String']>;
}>;


export type ChangeArticleApprovalMutation = { __typename?: 'Mutation', changeArticleApproval?: boolean | null };

export const ChangeArticleApprovalDocument = gql`
    mutation changeArticleApproval($articleId: String) {
  changeArticleApproval(articleId: $articleId)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ChangeArticleApprovalGQL extends Apollo.Mutation<ChangeArticleApprovalMutation, ChangeArticleApprovalMutationVariables> {
    override document = ChangeArticleApprovalDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }