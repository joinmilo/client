/* eslint-disable */
import * as Types from '../../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { MediaFragmentDoc } from '../../../../core/api/generated/media.fragment.generated';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type GetContestParticipationsQueryVariables = Types.Exact<{
  params?: Types.InputMaybe<Types.FilterSortPaginateInput>;
}>;


export type GetContestParticipationsQuery = { __typename?: 'Query', getContestParticipations?: { __typename?: 'PageableList_ContestParticipationEntity', result?: Array<{ __typename?: 'ContestParticipationEntity', id?: string | null, winner?: boolean | null, userContext?: { __typename?: 'UserContextEntity', id?: string | null, user?: { __typename?: 'UserEntity', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null } | null } | null, contest?: { __typename?: 'ContestEntity', id?: string | null } | null, mediaSubmissions?: Array<{ __typename?: 'ContestParticipationMediaEntity', id?: string | null, media?: { __typename?: 'MediaEntity', id?: string | null, created?: any | null, extension?: string | null, mimeType?: string | null, modified?: any | null, name?: string | null, size?: any | null, url?: string | null, attribution?: { __typename?: 'MediaAttributionEntity', id?: string | null, title?: string | null, author?: string | null, source?: string | null, license?: string | null } | null } | null } | null> | null } | null> | null } | null };

export const GetContestParticipationsDocument = gql`
    query getContestParticipations($params: FilterSortPaginateInput) {
  getContestParticipations(params: $params) {
    result {
      id
      winner
      userContext {
        id
        user {
          id
          firstName
          lastName
          email
        }
      }
      contest {
        id
      }
      mediaSubmissions {
        id
        media {
          ...Media
        }
      }
    }
  }
}
    ${MediaFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetContestParticipationsGQL extends Apollo.Query<GetContestParticipationsQuery, GetContestParticipationsQueryVariables> {
    override document = GetContestParticipationsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }