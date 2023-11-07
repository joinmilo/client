/* eslint-disable */
import * as Types from '../../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { LanguageFragmentDoc } from '../../../../core/api/generated/language.fragment.generated';
export type TargetGroupsFragment = { __typename?: 'EventTargetGroupEntity', id?: string | null, name?: string | null, translatables?: Array<{ __typename?: 'EventTargetGroupTranslatableEntity', id?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null };

export const TargetGroupsFragmentDoc = gql`
    fragment TargetGroups on EventTargetGroupEntity {
  id
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