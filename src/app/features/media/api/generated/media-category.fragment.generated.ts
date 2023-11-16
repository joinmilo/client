/* eslint-disable */
import * as Types from '../../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
export type MediaCategoryFragment = { __typename?: 'InfoMediaCategoryEntity', id?: string | null, name?: string | null, translatables?: Array<{ __typename?: 'InfoMediaCategoryTranslatableEntity', id?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, name?: string | null, locale?: string | null } | null } | null> | null };

export const MediaCategoryFragmentDoc = gql`
    fragment MediaCategory on InfoMediaCategoryEntity {
  id
  name
  translatables {
    id
    name
    language {
      id
      name
      locale
    }
  }
}
    `;