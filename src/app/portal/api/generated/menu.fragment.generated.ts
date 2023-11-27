/* eslint-disable */
import * as Types from '../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { PluginFragmentDoc } from '../../../core/api/generated/feature.fragment.generated';
import { LanguageFragmentDoc } from '../../../core/api/generated/language.fragment.generated';
export type MenuItemFragment = { __typename?: 'MenuItemEntity', id?: string | null, header?: boolean | null, order?: number | null, icon?: string | null, parent?: { __typename?: 'MenuItemEntity', id?: string | null } | null, page?: { __typename?: 'PageEntity', id?: string | null, slug?: string | null } | null, plugin?: { __typename?: 'PluginEntity', id?: string | null, active?: boolean | null, icon?: string | null, name?: string | null, code?: string | null } | null, translatables?: Array<{ __typename?: 'MenuItemTranslatableEntity', id?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null, subMenuItems?: Array<{ __typename?: 'MenuItemEntity', id?: string | null, order?: number | null, icon?: string | null, plugin?: { __typename?: 'PluginEntity', id?: string | null, active?: boolean | null, icon?: string | null, name?: string | null, code?: string | null } | null, page?: { __typename?: 'PageEntity', id?: string | null, slug?: string | null } | null, subMenuItems?: Array<{ __typename?: 'MenuItemEntity', id?: string | null } | null> | null, translatables?: Array<{ __typename?: 'MenuItemTranslatableEntity', id?: string | null, name?: string | null, shortDescription?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null> | null };

export const MenuItemFragmentDoc = gql`
    fragment MenuItem on MenuItemEntity {
  id
  header
  order
  icon
  parent {
    id
  }
  page {
    id
    slug
  }
  plugin {
    ...Plugin
  }
  translatables {
    id
    name
    language {
      ...Language
    }
  }
  subMenuItems {
    id
    order
    icon
    plugin {
      ...Plugin
    }
    page {
      id
      slug
    }
    subMenuItems {
      id
    }
    translatables {
      id
      name
      shortDescription
      language {
        ...Language
      }
    }
  }
}
    ${PluginFragmentDoc}
${LanguageFragmentDoc}`;