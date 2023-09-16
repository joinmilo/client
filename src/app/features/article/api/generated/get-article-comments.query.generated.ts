/* eslint-disable */
import * as Types from '../../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { MediaFragmentDoc } from '../../../../core/api/generated/media.fragment.generated';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type GetArticleCommentsQueryVariables = Types.Exact<{
  params?: Types.InputMaybe<Types.FilterSortPaginateInput>;
}>;


export type GetArticleCommentsQuery = { __typename?: 'Query', getArticleComments?: { __typename?: 'PageableList_ArticleCommentEntity', total: any, result?: Array<{ __typename?: 'ArticleCommentEntity', id?: string | null, created?: any | null, modified?: any | null, userContext?: { __typename?: 'UserContextEntity', id?: string | null, uploads?: Array<{ __typename?: 'UserContextMediaEntity', profilePicture?: boolean | null, title?: boolean | null, media?: { __typename?: 'MediaEntity', id?: string | null, created?: any | null, extension?: string | null, mimeType?: string | null, modified?: any | null, name?: string | null, size?: any | null, url?: string | null, attribution?: { __typename?: 'MediaAttributionEntity', id?: string | null, title?: string | null, author?: string | null, source?: string | null, license?: string | null } | null } | null } | null> | null, user?: { __typename?: 'UserEntity', id?: string | null, firstName?: string | null, lastName?: string | null } | null } | null, translatables?: Array<{ __typename?: 'ArticleCommentTranslatableEntity', id?: string | null, content?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null> | null } | null };

export const GetArticleCommentsDocument = gql`
    query getArticleComments($params: FilterSortPaginateInput) {
  getArticleComments(params: $params) {
    result {
      id
      created
      modified
      userContext {
        id
        uploads {
          profilePicture
          title
          media {
            ...Media
          }
        }
        user {
          id
          firstName
          lastName
        }
      }
      translatables {
        id
        content
        language {
          id
          locale
          name
        }
      }
    }
    total
  }
}
    ${MediaFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetArticleCommentsGQL extends Apollo.Query<GetArticleCommentsQuery, GetArticleCommentsQueryVariables> {
    override document = GetArticleCommentsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }