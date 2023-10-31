/* eslint-disable */
import * as Types from '../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { MediaFragmentDoc } from '../../../core/api/generated/media.fragment.generated';
import { LanguageFragmentDoc } from '../../../core/api/generated/language.fragment.generated';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type GetPageDetailsQueryVariables = Types.Exact<{
  entity?: Types.InputMaybe<Types.PageEntityInput>;
}>;


export type GetPageDetailsQuery = { __typename?: 'Query', getPage?: { __typename?: 'PageEntity', id?: string | null, slug?: string | null, isLanding?: boolean | null, name?: string | null, content?: string | null, shortDescription?: string | null, metaDescription?: string | null, callText?: string | null, callUrl?: string | null, uploads?: Array<{ __typename?: 'PageMediaEntity', id?: string | null, title?: boolean | null, media?: { __typename?: 'MediaEntity', id?: string | null, created?: any | null, extension?: string | null, mimeType?: string | null, modified?: any | null, name?: string | null, size?: any | null, url?: string | null, base64?: string | null, attribution?: { __typename?: 'MediaAttributionEntity', id?: string | null, title?: string | null, author?: string | null, source?: string | null, license?: string | null } | null } | null } | null> | null, translatables?: Array<{ __typename?: 'PageTranslatableEntity', id?: string | null, name?: string | null, content?: string | null, shortDescription?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null };

export const GetPageDetailsDocument = gql`
    query getPageDetails($entity: PageEntityInput) {
  getPage(entity: $entity) {
    id
    slug
    isLanding
    name
    content
    shortDescription
    metaDescription
    callText
    callUrl
    uploads {
      id
      title
      media {
        ...Media
      }
    }
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
    ${MediaFragmentDoc}
${LanguageFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetPageDetailsGQL extends Apollo.Query<GetPageDetailsQuery, GetPageDetailsQueryVariables> {
    override document = GetPageDetailsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }