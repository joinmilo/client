/* eslint-disable */
import * as Types from '../../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type SponsorArticleMutationVariables = Types.Exact<{
  articleId?: Types.InputMaybe<Types.Scalars['String']['input']>;
}>;


export type SponsorArticleMutation = { __typename?: 'Mutation', sponsorArticle?: boolean | null };

export const SponsorArticleDocument = gql`
    mutation sponsorArticle($articleId: String) {
  sponsorArticle(articleId: $articleId)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class SponsorArticleGQL extends Apollo.Mutation<SponsorArticleMutation, SponsorArticleMutationVariables> {
    override document = SponsorArticleDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }