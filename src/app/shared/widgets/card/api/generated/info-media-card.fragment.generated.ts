/* eslint-disable */
import * as Types from '../../../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { LanguageFragmentDoc } from '../../../../../core/api/generated/language.fragment.generated';
import { MediaFragmentDoc } from '../../../../../core/api/generated/media.fragment.generated';
export type InfoMediaCardFragment = { __typename?: 'InfoMediaEntity', id?: string | null, category?: { __typename?: 'InfoMediaCategoryEntity', id?: string | null, translatables?: Array<{ __typename?: 'InfoMediaCategoryTranslatableEntity', id?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null, media?: { __typename?: 'MediaEntity', id?: string | null, created?: any | null, extension?: string | null, mimeType?: string | null, modified?: any | null, name?: string | null, size?: any | null, url?: string | null, base64?: string | null, attribution?: { __typename?: 'MediaAttributionEntity', id?: string | null, title?: string | null, author?: string | null, source?: string | null, license?: string | null } | null } | null };

export const InfoMediaCardFragmentDoc = gql`
    fragment InfoMediaCard on InfoMediaEntity {
  id
  category {
    id
    translatables {
      id
      name
      language {
        ...Language
      }
    }
  }
  media {
    ...Media
  }
}
    ${LanguageFragmentDoc}
${MediaFragmentDoc}`;