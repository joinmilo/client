/* eslint-disable */
import * as Types from '../../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { LanguageFragmentDoc } from '../../../../core/api/generated/language.fragment.generated';
export type ContestTypeFragment = { __typename?: 'ContestTypeEntity', id?: string | null, code?: string | null, name?: string | null, translatables?: Array<{ __typename?: 'ContestTypeTranslatableEntity', id?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null };

export const ContestTypeFragmentDoc = gql`
    fragment ContestType on ContestTypeEntity {
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
    ${LanguageFragmentDoc}`;