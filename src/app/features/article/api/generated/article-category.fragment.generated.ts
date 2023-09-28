/* eslint-disable */
import * as Types from '../../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
export type ArticleCategoryFragment = { __typename?: 'ArticleCategoryEntity', id?: string | null, color?: string | null, icon?: string | null, name?: string | null, translatables?: Array<{ __typename?: 'ArticleCategoryTranslatableEntity', id?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, name?: string | null, locale?: string | null } | null } | null> | null };

export const ArticleCategoryFragmentDoc = gql`
    fragment ArticleCategory on ArticleCategoryEntity {
  id
  color
  icon
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