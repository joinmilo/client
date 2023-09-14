/* eslint-disable */
import * as Types from '../../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { LanguageFragmentDoc } from '../../../../core/api/generated/language.fragment.generated';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type GetArticleDetailsLayoutQueryVariables = Types.Exact<{
  entity?: Types.InputMaybe<Types.ArticleEntityInput>;
}>;


export type GetArticleDetailsLayoutQuery = { __typename?: 'Query', getArticle?: { __typename?: 'ArticleEntity', id?: string | null, slug?: string | null, translatables?: Array<{ __typename?: 'ArticleTranslatableEntity', id?: string | null, name?: string | null, content?: string | null, shortDescription?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null };

export const GetArticleDetailsLayoutDocument = gql`
    query getArticleDetailsLayout($entity: ArticleEntityInput) {
  getArticle(entity: $entity) {
    id
    slug
    translatables {
      id
      name
      content
      shortDescription
      language {
        ...Language
      }
    }
  }
}
    ${LanguageFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetArticleDetailsLayoutGQL extends Apollo.Query<GetArticleDetailsLayoutQuery, GetArticleDetailsLayoutQueryVariables> {
    override document = GetArticleDetailsLayoutDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }