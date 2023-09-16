/* eslint-disable */
import * as Types from '../../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { EventCommentFragmentDoc } from './event-comment.fragment.generated';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type GetEventCommentsQueryVariables = Types.Exact<{
  params?: Types.InputMaybe<Types.FilterSortPaginateInput>;
}>;


export type GetEventCommentsQuery = { __typename?: 'Query', getEventComments?: { __typename?: 'PageableList_EventCommentEntity', total: any, result?: Array<{ __typename?: 'EventCommentEntity', id?: string | null, created?: any | null, modified?: any | null, content?: string | null, userContext?: { __typename?: 'UserContextEntity', id?: string | null, uploads?: Array<{ __typename?: 'UserContextMediaEntity', profilePicture?: boolean | null, title?: boolean | null, media?: { __typename?: 'MediaEntity', id?: string | null, created?: any | null, extension?: string | null, mimeType?: string | null, modified?: any | null, name?: string | null, size?: any | null, url?: string | null, attribution?: { __typename?: 'MediaAttributionEntity', id?: string | null, title?: string | null, author?: string | null, source?: string | null, license?: string | null } | null } | null } | null> | null, user?: { __typename?: 'UserEntity', id?: string | null, firstName?: string | null, lastName?: string | null } | null } | null, translatables?: Array<{ __typename?: 'EventCommentTranslatableEntity', id?: string | null, content?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null> | null } | null };

export const GetEventCommentsDocument = gql`
    query getEventComments($params: FilterSortPaginateInput) {
  getEventComments(params: $params) {
    result {
      ...EventComment
    }
    total
  }
}
    ${EventCommentFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetEventCommentsGQL extends Apollo.Query<GetEventCommentsQuery, GetEventCommentsQueryVariables> {
    override document = GetEventCommentsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }