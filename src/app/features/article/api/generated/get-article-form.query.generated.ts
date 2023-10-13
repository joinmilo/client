/* eslint-disable */
import * as Types from '../../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { ArticleCategoryFragmentDoc } from './article-category.fragment.generated';
import { MediaFragmentDoc } from '../../../../core/api/generated/media.fragment.generated';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type GetArticleFormQueryVariables = Types.Exact<{
  entity?: Types.InputMaybe<Types.ArticleEntityInput>;
}>;


export type GetArticleFormQuery = { __typename?: 'Query', getArticle?: { __typename?: 'ArticleEntity', id?: string | null, approved?: boolean | null, created?: any | null, sponsored?: boolean | null, modified?: any | null, content?: string | null, shortDescription?: string | null, name?: string | null, metaDescription?: string | null, category?: { __typename?: 'ArticleCategoryEntity', id?: string | null, color?: string | null, icon?: string | null, name?: string | null, translatables?: Array<{ __typename?: 'ArticleCategoryTranslatableEntity', id?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, name?: string | null, locale?: string | null } | null } | null> | null } | null, uploads?: Array<{ __typename?: 'ArticleMediaEntity', id?: string | null, title?: boolean | null, card?: boolean | null, media?: { __typename?: 'MediaEntity', id?: string | null, created?: any | null, extension?: string | null, mimeType?: string | null, modified?: any | null, name?: string | null, size?: any | null, url?: string | null, base64?: string | null, attribution?: { __typename?: 'MediaAttributionEntity', id?: string | null, title?: string | null, author?: string | null, source?: string | null, license?: string | null } | null } | null } | null> | null } | null };

export const GetArticleFormDocument = gql`
    query getArticleForm($entity: ArticleEntityInput) {
  getArticle(entity: $entity) {
    id
    approved
    created
    sponsored
    modified
    content
    shortDescription
    name
    metaDescription
    sponsored
    category {
      ...ArticleCategory
    }
    uploads {
      id
      title
      card
      media {
        ...Media
      }
    }
  }
}
    ${ArticleCategoryFragmentDoc}
${MediaFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetArticleFormGQL extends Apollo.Query<GetArticleFormQuery, GetArticleFormQueryVariables> {
    override document = GetArticleFormDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }