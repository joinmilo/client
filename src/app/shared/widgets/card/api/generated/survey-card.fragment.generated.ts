/* eslint-disable */
import * as Types from '../../../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { MediaFragmentDoc } from '../../../../../core/api/generated/media.fragment.generated';
import { ContactFragmentDoc } from '../../../../../core/api/generated/contact.fragment.generated';
export type SurveyCardFragment = { __typename?: 'SurveyEntity', id?: string | null, name?: string | null, slug?: string | null, dueDate?: any | null, startDate?: any | null, uploads?: Array<{ __typename?: 'SurveyMediaEntity', title?: boolean | null, card?: boolean | null, media?: { __typename?: 'MediaEntity', id?: string | null, created?: any | null, extension?: string | null, mimeType?: string | null, modified?: any | null, name?: string | null, size?: any | null, url?: string | null, base64?: string | null, attribution?: { __typename?: 'MediaAttributionEntity', id?: string | null, title?: string | null, author?: string | null, source?: string | null, license?: string | null } | null } | null } | null> | null, translatables?: Array<{ __typename?: 'SurveyTranslatableEntity', id?: string | null, description?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null, contact?: { __typename?: 'ContactEntity', id?: string | null, email?: string | null, name?: string | null, phone?: string | null, preferredContact?: boolean | null, website?: string | null } | null };

export const SurveyCardFragmentDoc = gql`
    fragment SurveyCard on SurveyEntity {
  id
  name
  slug
  dueDate
  startDate
  uploads {
    title
    card
    media {
      ...Media
    }
  }
  translatables {
    id
    description
    language {
      id
      locale
      name
    }
  }
  contact {
    ...Contact
  }
}
    ${MediaFragmentDoc}
${ContactFragmentDoc}`;