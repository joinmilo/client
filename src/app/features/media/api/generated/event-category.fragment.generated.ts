/* eslint-disable */
import * as Types from '../../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { LanguageFragmentDoc } from '../../../../core/api/generated/language.fragment.generated';
export type EventCategoryFragment = { __typename?: 'EventCategoryEntity', id?: string | null, color?: string | null, icon?: string | null, name?: string | null, translatables?: Array<{ __typename?: 'EventCategoryTranslatableEntity', id?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null };

export const EventCategoryFragmentDoc = gql`
    fragment EventCategory on EventCategoryEntity {
  id
  color
  icon
  name
  translatables {
    id
    name
    language {
      ...Language
    }
  }
}
    ${LanguageFragmentDoc}`;