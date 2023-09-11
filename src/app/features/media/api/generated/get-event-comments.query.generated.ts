/* eslint-disable */
import * as Types from '../../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type GetEventCommentsQueryVariables = Types.Exact<{
  params?: Types.InputMaybe<Types.FilterSortPaginateInput>;
}>;


export type GetEventCommentsQuery = { __typename?: 'Query', getEventComments?: { __typename?: 'PageableList_EventCommentEntity', result?: Array<{ __typename?: 'EventCommentEntity' } | null> | null } | null };

export const GetEventCommentsDocument = gql`
    query getEventComments($params: FilterSortPaginateInput) {
  getEventComments(params: $params) {
    result {
      ...EventComment
    }
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