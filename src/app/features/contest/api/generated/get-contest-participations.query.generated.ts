/* eslint-disable */
import * as Types from '../../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { LanguageFragmentDoc } from '../../../../core/api/generated/language.fragment.generated';
import { MediaFragmentDoc } from '../../../../core/api/generated/media.fragment.generated';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type GetContestParticipationsQueryVariables = Types.Exact<{
  params?: Types.InputMaybe<Types.FilterSortPaginateInput>;
}>;


export type GetContestParticipationsQuery = { __typename?: 'Query', getContestParticipations?: { __typename?: 'PageableList_ContestParticipationEntity', total: any, result?: Array<{ __typename?: 'ContestParticipationEntity', id?: string | null, approved?: boolean | null, placement?: number | null, textSubmission?: string | null, contest?: { __typename?: 'ContestEntity', id?: string | null, maxParticipations?: number | null } | null, userContext?: { __typename?: 'UserContextEntity', id?: string | null, user?: { __typename?: 'UserEntity', firstName?: string | null, lastName?: string | null } | null } | null, contestVotes?: Array<{ __typename?: 'ContestVoteEntity', id?: string | null, userContext?: { __typename?: 'UserContextEntity', id?: string | null } | null } | null> | null, translatables?: Array<{ __typename?: 'ContestParticipationTranslatableEntity', id?: string | null, textSubmission?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null, mediaSubmissions?: Array<{ __typename?: 'ContestParticipationMediaEntity', id?: string | null, media?: { __typename?: 'MediaEntity', id?: string | null, created?: any | null, extension?: string | null, mimeType?: string | null, modified?: any | null, name?: string | null, size?: any | null, url?: string | null, base64?: string | null, attribution?: { __typename?: 'MediaAttributionEntity', id?: string | null, title?: string | null, author?: string | null, source?: string | null, license?: string | null } | null } | null } | null> | null } | null> | null } | null };

export const GetContestParticipationsDocument = gql`
    query getContestParticipations($params: FilterSortPaginateInput) {
  getContestParticipations(params: $params) {
    result {
      id
      approved
      placement
      textSubmission
      contest {
        id
        maxParticipations
      }
      userContext {
        id
        user {
          firstName
          lastName
        }
      }
      contestVotes {
        id
        userContext {
          id
        }
      }
      translatables {
        id
        textSubmission
        language {
          ...Language
        }
      }
      mediaSubmissions {
        id
        media {
          ...Media
        }
      }
    }
    total
  }
}
    ${LanguageFragmentDoc}
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