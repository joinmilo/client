/* eslint-disable */
import * as Types from '../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { LanguageFragmentDoc } from '../../../core/api/generated/language.fragment.generated';
import { MediaFragmentDoc } from '../../../core/api/generated/media.fragment.generated';
export type PageFragment = { __typename?: 'PageEntity', id?: string | null, created?: any | null, label?: string | null, slug?: string | null, embeddings?: Array<{ __typename?: 'PageEmbeddingEntity', id?: string | null, order?: number | null, attributes?: Array<{ __typename?: 'PageAttributeEntity', id?: string | null, value?: string | null, translatables?: Array<{ __typename?: 'PageAttributeTranslatableEntity', id?: string | null, translatable?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null, references?: Array<{ __typename?: 'PageAttributeReferenceEntity', id?: string | null, plugin?: { __typename?: 'PluginEntity', id?: string | null, code?: string | null } | null, media?: { __typename?: 'MediaEntity', id?: string | null, created?: any | null, extension?: string | null, mimeType?: string | null, modified?: any | null, name?: string | null, size?: any | null, url?: string | null, base64?: string | null, attribution?: { __typename?: 'MediaAttributionEntity', id?: string | null, title?: string | null, author?: string | null, source?: string | null, license?: string | null } | null } | null } | null> | null, type?: { __typename?: 'PageAttributeTypeEntity', id?: string | null, code?: string | null } | null } | null> | null, type?: { __typename?: 'PageEmbeddingTypeEntity', id?: string | null, code?: string | null } | null } | null> | null };

export const PageFragmentDoc = gql`
    fragment Page on PageEntity {
  id
  created
  label
  slug
  embeddings {
    id
    order
    attributes {
      id
      value
      translatables {
        id
        translatable
        language {
          ...Language
        }
      }
      references {
        id
        plugin {
          id
          code
        }
        media {
          ...Media
        }
      }
      type {
        id
        code
      }
    }
    type {
      id
      code
    }
  }
}
    ${LanguageFragmentDoc}
${MediaFragmentDoc}`;