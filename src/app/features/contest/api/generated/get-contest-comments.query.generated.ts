/* eslint-disable */
import * as Types from '../../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { ContestCommentFragmentDoc } from './contest-comment.fragment.generated';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type GetContestCommentsQueryVariables = Types.Exact<{
  params?: Types.InputMaybe<Types.FilterSortPaginateInput>;
}>;


export type GetContestCommentsQuery = { __typename?: 'Query', getContestComments?: { __typename?: 'PageableList_ContestCommentEntity', result?: Array<{ __typename?: 'ContestCommentEntity', id?: string | null, created?: any | null, modified?: any | null, userContext?: { __typename?: 'UserContextEntity', id?: string | null, uploads?: Array<{ __typename?: 'UserContextMediaEntity', profilePicture?: boolean | null, title?: boolean | null, media?: { __typename?: 'MediaEntity', id?: string | null, created?: any | null, extension?: string | null, mimeType?: string | null, modified?: any | null, name?: string | null, size?: any | null, url?: string | null, base64?: string | null, attribution?: { __typename?: 'MediaAttributionEntity', id?: string | null, title?: string | null, author?: string | null, source?: string | null, license?: string | null } | null } | null } | null> | null, user?: { __typename?: 'UserEntity', id?: string | null, firstName?: string | null, lastName?: string | null } | null } | null, translatables?: Array<{ __typename?: 'ContestCommentTranslatableEntity', id?: string | null, content?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null> | null } | null };

export const GetContestCommentsDocument = gql`
    query getContestComments($params: FilterSortPaginateInput) {
  getContestComments(params: $params) {
    result {
      ...ContestComment
    }
  }
}
    ${ContestCommentFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetContestCommentsGQL extends Apollo.Query<GetContestCommentsQuery, GetContestCommentsQueryVariables> {
    override document = GetContestCommentsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }