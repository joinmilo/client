/* eslint-disable */
import * as Types from '../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { MediaFragmentDoc } from '../../../core/api/generated/media.fragment.generated';
import { LanguageFragmentDoc } from '../../../core/api/generated/language.fragment.generated';
export type PageFragment = { __typename?: 'PageEntity', id?: string | null, callUrl?: string | null, slug?: string | null, uploads?: Array<{ __typename?: 'PageMediaEntity', id?: string | null, title?: boolean | null, media?: { __typename?: 'MediaEntity', id?: string | null, created?: any | null, extension?: string | null, mimeType?: string | null, modified?: any | null, name?: string | null, size?: any | null, url?: string | null, base64?: string | null, attribution?: { __typename?: 'MediaAttributionEntity', id?: string | null, title?: string | null, author?: string | null, source?: string | null, license?: string | null } | null } | null } | null> | null, embeddings?: Array<{ __typename?: 'PageEmbeddingEntity', id?: string | null, order?: number | null, attributes?: Array<{ __typename?: 'PageAttributeEntity', id?: string | null, translatables?: Array<{ __typename?: 'PageAttributeTranslatableEntity', id?: string | null, content?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null, references?: Array<{ __typename?: 'PageAttributeReferenceEntity', id?: string | null, referenceId?: string | null } | null> | null } | null> | null, type?: { __typename?: 'PageEmbeddingTypeEntity', id?: string | null, code?: string | null } | null } | null> | null, translatables?: Array<{ __typename?: 'PageTranslatableEntity', id?: string | null, callText?: string | null, content?: string | null, shortDescription?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null };

export const PageFragmentDoc = gql`
    fragment Page on PageEntity {
  id
  callUrl
  slug
  uploads {
    id
    title
    media {
      ...Media
    }
  }
  embeddings {
    id
    order
    attributes {
      id
      translatables {
        id
        content
        language {
          ...Language
        }
      }
      references {
        id
        referenceId
      }
    }
    type {
      id
      code
    }
  }
  translatables {
    id
    callText
    content
    shortDescription
    name
    language {
      id
      locale
      name
    }
  }
}
    ${MediaFragmentDoc}
${LanguageFragmentDoc}`;