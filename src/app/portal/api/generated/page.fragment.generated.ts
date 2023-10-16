/* eslint-disable */
import * as Types from '../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { MediaFragmentDoc } from '../../../core/api/generated/media.fragment.generated';
import { FeatureFragmentDoc } from '../../../core/api/generated/feature.fragment.generated';
export type PageFragment = { __typename?: 'PageEntity', id?: string | null, callUrl?: string | null, slug?: string | null, uploads?: Array<{ __typename?: 'PageMediaEntity', id?: string | null, title?: boolean | null, media?: { __typename?: 'MediaEntity', id?: string | null, created?: any | null, extension?: string | null, mimeType?: string | null, modified?: any | null, name?: string | null, size?: any | null, url?: string | null, base64?: string | null, attribution?: { __typename?: 'MediaAttributionEntity', id?: string | null, title?: string | null, author?: string | null, source?: string | null, license?: string | null } | null } | null } | null> | null, embeddings?: Array<{ __typename?: 'PageEmbeddingEntity', id?: string | null, order?: number | null, feature?: { __typename?: 'FeatureEntity', id?: string | null, active?: boolean | null, icon?: string | null, name?: string | null, code?: string | null } | null } | null> | null, translatables?: Array<{ __typename?: 'PageTranslatableEntity', id?: string | null, callText?: string | null, content?: string | null, shortDescription?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null };

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
    feature {
      ...Feature
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
${FeatureFragmentDoc}`;