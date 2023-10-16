/* eslint-disable */
import * as Types from '../../../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { LanguageFragmentDoc } from '../../../../../core/api/generated/language.fragment.generated';
import { MediaFragmentDoc } from '../../../../../core/api/generated/media.fragment.generated';
export type GuestArticleCardFragment = { __typename?: 'ArticleEntity', id?: string | null, created?: any | null, modified?: any | null, slug?: string | null, category?: { __typename?: 'ArticleCategoryEntity', id?: string | null, color?: string | null, icon?: string | null, translatables?: Array<{ __typename?: 'ArticleCategoryTranslatableEntity', id?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null, uploads?: Array<{ __typename?: 'ArticleMediaEntity', id?: string | null, title?: boolean | null, card?: boolean | null, media?: { __typename?: 'MediaEntity', id?: string | null, created?: any | null, extension?: string | null, mimeType?: string | null, modified?: any | null, name?: string | null, size?: any | null, url?: string | null, base64?: string | null, attribution?: { __typename?: 'MediaAttributionEntity', id?: string | null, title?: string | null, author?: string | null, source?: string | null, license?: string | null } | null } | null } | null> | null, publicAuthor?: { __typename?: 'ArticlePublicAuthorEntity', id?: string | null, name?: string | null, email?: string | null, phone?: string | null } | null, translatables?: Array<{ __typename?: 'ArticleTranslatableEntity', id?: string | null, content?: string | null, shortDescription?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null };

export const GuestArticleCardFragmentDoc = gql`
    fragment GuestArticleCard on ArticleEntity {
  id
  created
  modified
  slug
  category {
    id
    color
    icon
    translatables {
      id
      name
      language {
        ...Language
      }
    }
  }
  uploads {
    id
    title
    card
    media {
      ...Media
    }
  }
  publicAuthor {
    id
    name
    email
    phone
  }
  translatables {
    id
    content
    shortDescription
    name
    language {
      ...Language
    }
  }
}
    ${LanguageFragmentDoc}
${MediaFragmentDoc}`;