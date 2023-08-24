/* eslint-disable */
import * as Types from '../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { PageFragmentDoc } from './page.fragment.generated';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type GetPageQueryVariables = Types.Exact<{
  isLanding?: Types.InputMaybe<Types.Scalars['Boolean']>;
  slug?: Types.InputMaybe<Types.Scalars['String']>;
}>;


export type GetPageQuery = { __typename?: 'Query', getPage?: { __typename?: 'PageEntity', id?: string | null, callUrl?: string | null, slug?: string | null, uploads?: Array<{ __typename?: 'PageMediaEntity', title?: boolean | null, media?: { __typename?: 'MediaEntity', id?: string | null, created?: any | null, extension?: string | null, mimeType?: string | null, modified?: any | null, name?: string | null, size?: any | null, url?: string | null, attribution?: { __typename?: 'MediaAttributionEntity', id?: string | null, title?: string | null, author?: string | null, source?: string | null, license?: string | null } | null } | null } | null> | null, embeddings?: Array<{ __typename?: 'PageEmbeddingEntity', id?: string | null, order?: number | null, feature?: { __typename?: 'FeatureEntity', id?: string | null, active?: boolean | null, icon?: string | null, name?: string | null, code?: string | null } | null } | null> | null, translatables?: Array<{ __typename?: 'PageTranslatableEntity', id?: string | null, callText?: string | null, content?: string | null, shortDescription?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null };

export const GetPageDocument = gql`
    query getPage($isLanding: Boolean, $slug: String) {
  getPage(entity: {isLanding: $isLanding, slug: $slug}) {
    ...Page
  }
}
    ${PageFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetPageGQL extends Apollo.Query<GetPageQuery, GetPageQueryVariables> {
    override document = GetPageDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }