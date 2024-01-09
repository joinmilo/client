/* eslint-disable */
import * as Types from '../../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { LanguageFragmentDoc } from '../../../../core/api/generated/language.fragment.generated';
import { ContactFragmentDoc } from '../../../../core/api/generated/contact.fragment.generated';
import { MediaFragmentDoc } from '../../../../core/api/generated/media.fragment.generated';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type GetContestFormQueryVariables = Types.Exact<{
  entity?: Types.InputMaybe<Types.ContestEntityInput>;
}>;


export type GetContestFormQuery = { __typename?: 'Query', getContest?: { __typename?: 'ContestEntity', id?: string | null, slug?: string | null, commentsAllowed?: boolean | null, modified?: any | null, name?: string | null, shortDescription?: string | null, content?: string | null, sponsored?: boolean | null, maxVotes?: number | null, maxParticipations?: number | null, participationEndDate?: any | null, voteEndDate?: any | null, participationApproval?: boolean | null, type?: { __typename?: 'ContestTypeEntity', id?: string | null, code?: string | null, name?: string | null, translatables?: Array<{ __typename?: 'ContestTypeTranslatableEntity', id?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null, contact?: { __typename?: 'ContactEntity', id?: string | null, email?: string | null, name?: string | null, phone?: string | null, preferredContact?: boolean | null, website?: string | null } | null, translatables?: Array<{ __typename?: 'ContestTranslatableEntity', id?: string | null, content?: string | null, name?: string | null, shortDescription?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null, uploads?: Array<{ __typename?: 'ContestMediaEntity', id?: string | null, title?: boolean | null, card?: boolean | null, media?: { __typename?: 'MediaEntity', id?: string | null, created?: any | null, extension?: string | null, mimeType?: string | null, modified?: any | null, name?: string | null, size?: any | null, url?: string | null, base64?: string | null, attribution?: { __typename?: 'MediaAttributionEntity', id?: string | null, title?: string | null, author?: string | null, source?: string | null, license?: string | null } | null } | null } | null> | null } | null };

export const GetContestFormDocument = gql`
    query getContestForm($entity: ContestEntityInput) {
  getContest(entity: $entity) {
    id
    slug
    commentsAllowed
    modified
    name
    shortDescription
    content
    sponsored
    maxVotes
    maxParticipations
    participationEndDate
    voteEndDate
    participationApproval
    type {
      id
      code
      name
      translatables {
        id
        name
        language {
          ...Language
        }
      }
    }
    contact {
      ...Contact
    }
    translatables {
      id
      content
      name
      shortDescription
      language {
        ...Language
      }
    }
    uploads {
      id
      title
      card
      media {
        ...Media
      }
    }
  }
}
    ${LanguageFragmentDoc}
${ContactFragmentDoc}
${MediaFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetContestFormGQL extends Apollo.Query<GetContestFormQuery, GetContestFormQueryVariables> {
    override document = GetContestFormDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }