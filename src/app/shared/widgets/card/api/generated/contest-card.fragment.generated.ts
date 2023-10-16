/* eslint-disable */
import * as Types from '../../../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { MediaFragmentDoc } from '../../../../../core/api/generated/media.fragment.generated';
import { LanguageFragmentDoc } from '../../../../../core/api/generated/language.fragment.generated';
import { ContactFragmentDoc } from '../../../../../core/api/generated/contact.fragment.generated';
export type ContestCardFragment = { __typename?: 'ContestEntity', id?: string | null, created?: any | null, modified?: any | null, slug?: string | null, participationEndDate?: any | null, voteEndDate?: any | null, uploads?: Array<{ __typename?: 'ContestMediaEntity', title?: boolean | null, card?: boolean | null, media?: { __typename?: 'MediaEntity', id?: string | null, created?: any | null, extension?: string | null, mimeType?: string | null, modified?: any | null, name?: string | null, size?: any | null, url?: string | null, base64?: string | null, attribution?: { __typename?: 'MediaAttributionEntity', id?: string | null, title?: string | null, author?: string | null, source?: string | null, license?: string | null } | null } | null } | null> | null, type?: { __typename?: 'ContestTypeEntity', id?: string | null, translatables?: Array<{ __typename?: 'ContestTypeTranslatableEntity', id?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null, translatables?: Array<{ __typename?: 'ContestTranslatableEntity', id?: string | null, name?: string | null, content?: string | null, shortDescription?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null, contact?: { __typename?: 'ContactEntity', id?: string | null, email?: string | null, name?: string | null, phone?: string | null, preferredContact?: boolean | null, website?: string | null } | null };

export const ContestCardFragmentDoc = gql`
    fragment ContestCard on ContestEntity {
  id
  created
  modified
  slug
  participationEndDate
  voteEndDate
  uploads {
    title
    card
    media {
      ...Media
    }
  }
  type {
    id
    translatables {
      id
      name
      language {
        ...Language
      }
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
  contact {
    ...Contact
  }
}
    ${MediaFragmentDoc}
${LanguageFragmentDoc}
${ContactFragmentDoc}`;