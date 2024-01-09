/* eslint-disable */
import * as Types from '../../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { MediaFragmentDoc } from '../../../../core/api/generated/media.fragment.generated';
import { ContestTypeFragmentDoc } from './contest-type.fragement.generated';
import { ContestCommentFragmentDoc } from './contest-comment.fragment.generated';
import { ContactFragmentDoc } from '../../../../core/api/generated/contact.fragment.generated';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type GetContestDetailsQueryVariables = Types.Exact<{
  entity?: Types.InputMaybe<Types.ContestEntityInput>;
}>;


export type GetContestDetailsQuery = { __typename?: 'Query', getContest?: { __typename?: 'ContestEntity', id?: string | null, modified?: any | null, created?: any | null, slug?: string | null, sponsored?: boolean | null, participationEndDate?: any | null, voteEndDate?: any | null, participationApproval?: boolean | null, maxParticipations?: number | null, maxVotes?: number | null, commentsAllowed?: boolean | null, participations?: Array<{ __typename?: 'ContestParticipationEntity', id?: string | null, placement?: number | null, userContext?: { __typename?: 'UserContextEntity', id?: string | null } | null } | null> | null, uploads?: Array<{ __typename?: 'ContestMediaEntity', title?: boolean | null, card?: boolean | null, media?: { __typename?: 'MediaEntity', id?: string | null, created?: any | null, extension?: string | null, mimeType?: string | null, modified?: any | null, name?: string | null, size?: any | null, url?: string | null, base64?: string | null, attribution?: { __typename?: 'MediaAttributionEntity', id?: string | null, title?: string | null, author?: string | null, source?: string | null, license?: string | null } | null } | null } | null> | null, type?: { __typename?: 'ContestTypeEntity', id?: string | null, code?: string | null, name?: string | null, translatables?: Array<{ __typename?: 'ContestTypeTranslatableEntity', id?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null, translatables?: Array<{ __typename?: 'ContestTranslatableEntity', id?: string | null, name?: string | null, content?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null, lastContestComment?: { __typename?: 'ContestCommentEntity', id?: string | null, created?: any | null, modified?: any | null, userContext?: { __typename?: 'UserContextEntity', id?: string | null, uploads?: Array<{ __typename?: 'UserContextMediaEntity', profilePicture?: boolean | null, title?: boolean | null, media?: { __typename?: 'MediaEntity', id?: string | null, created?: any | null, extension?: string | null, mimeType?: string | null, modified?: any | null, name?: string | null, size?: any | null, url?: string | null, base64?: string | null, attribution?: { __typename?: 'MediaAttributionEntity', id?: string | null, title?: string | null, author?: string | null, source?: string | null, license?: string | null } | null } | null } | null> | null, user?: { __typename?: 'UserEntity', id?: string | null, firstName?: string | null, lastName?: string | null } | null } | null, translatables?: Array<{ __typename?: 'ContestCommentTranslatableEntity', id?: string | null, content?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null, contact?: { __typename?: 'ContactEntity', id?: string | null, email?: string | null, name?: string | null, phone?: string | null, preferredContact?: boolean | null, website?: string | null } | null } | null };

export const GetContestDetailsDocument = gql`
    query getContestDetails($entity: ContestEntityInput) {
  getContest(entity: $entity) {
    id
    modified
    created
    slug
    sponsored
    participationEndDate
    voteEndDate
    participationApproval
    maxParticipations
    maxVotes
    commentsAllowed
    participations {
      id
      placement
      userContext {
        id
      }
    }
    uploads {
      title
      card
      media {
        ...Media
      }
    }
    type {
      ...ContestType
    }
    translatables {
      id
      name
      content
      language {
        id
        locale
        name
      }
    }
    lastContestComment {
      ...ContestComment
    }
    contact {
      ...Contact
    }
  }
}
    ${MediaFragmentDoc}
${ContestTypeFragmentDoc}
${ContestCommentFragmentDoc}
${ContactFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetContestDetailsGQL extends Apollo.Query<GetContestDetailsQuery, GetContestDetailsQueryVariables> {
    override document = GetContestDetailsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }