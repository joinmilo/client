/* eslint-disable */
import * as Types from '../../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { AuthorDetailsFragmentDoc } from './author-details.fragment.generated';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type GetAuthorDetailsQueryVariables = Types.Exact<{
  entity?: Types.InputMaybe<Types.UserContextEntityInput>;
}>;


export type GetAuthorDetailsQuery = { __typename?: 'Query', getUserContext?: { __typename?: 'UserContextEntity', id?: string | null, description?: string | null, slug?: string | null, translatables?: Array<{ __typename?: 'UserContextTranslatableEntity', id?: string | null, description?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null, uploads?: Array<{ __typename?: 'UserContextMediaEntity', profilePicture?: boolean | null, title?: boolean | null, media?: { __typename?: 'MediaEntity', id?: string | null, created?: any | null, extension?: string | null, mimeType?: string | null, modified?: any | null, name?: string | null, size?: any | null, url?: string | null, attribution?: { __typename?: 'MediaAttributionEntity', id?: string | null, title?: string | null, author?: string | null, source?: string | null, license?: string | null } | null } | null } | null> | null, articles?: Array<{ __typename?: 'ArticleEntity', id?: string | null, created?: any | null, modified?: any | null, slug?: string | null, author?: { __typename?: 'UserContextEntity', id?: string | null, uploads?: Array<{ __typename?: 'UserContextMediaEntity', id?: string | null, profilePicture?: boolean | null, media?: { __typename?: 'MediaEntity', id?: string | null, created?: any | null, extension?: string | null, mimeType?: string | null, modified?: any | null, name?: string | null, size?: any | null, url?: string | null, attribution?: { __typename?: 'MediaAttributionEntity', id?: string | null, title?: string | null, author?: string | null, source?: string | null, license?: string | null } | null } | null } | null> | null, user?: { __typename?: 'UserEntity', id?: string | null, firstName?: string | null, lastName?: string | null } | null } | null, category?: { __typename?: 'ArticleCategoryEntity', id?: string | null, color?: string | null, icon?: string | null, translatables?: Array<{ __typename?: 'ArticleCategoryTranslatableEntity', id?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, name?: string | null, locale?: string | null } | null } | null> | null } | null, uploads?: Array<{ __typename?: 'ArticleMediaEntity', id?: string | null, title?: boolean | null, card?: boolean | null, media?: { __typename?: 'MediaEntity', id?: string | null, created?: any | null, extension?: string | null, mimeType?: string | null, modified?: any | null, name?: string | null, size?: any | null, url?: string | null, attribution?: { __typename?: 'MediaAttributionEntity', id?: string | null, title?: string | null, author?: string | null, source?: string | null, license?: string | null } | null } | null } | null> | null, publicAuthor?: { __typename?: 'ArticlePublicAuthorEntity', id?: string | null, name?: string | null, email?: string | null, phone?: string | null } | null, translatables?: Array<{ __typename?: 'ArticleTranslatableEntity', id?: string | null, content?: string | null, shortDescription?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null> | null, user?: { __typename?: 'UserEntity', firstName?: string | null, lastName?: string | null, email?: string | null } | null } | null };

export const GetAuthorDetailsDocument = gql`
    query getAuthorDetails($entity: UserContextEntityInput) {
  getUserContext(entity: $entity) {
    ...AuthorDetails
  }
}
    ${AuthorDetailsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetAuthorDetailsGQL extends Apollo.Query<GetAuthorDetailsQuery, GetAuthorDetailsQueryVariables> {
    override document = GetAuthorDetailsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }