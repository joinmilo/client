/* eslint-disable */
import * as Types from '../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { MediaFragmentDoc } from '../../../core/api/generated/media.fragment.generated';
import { LanguageFragmentDoc } from '../../../core/api/generated/language.fragment.generated';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type GetPageDetailsQueryVariables = Types.Exact<{
  entity?: Types.InputMaybe<Types.PageEntityInput>;
}>;


export type GetPageDetailsQuery = { __typename?: 'Query', getPage?: { __typename?: 'PageEntity', id?: string | null, slug?: string | null, isLanding?: boolean | null, label?: string | null, embeddings?: Array<{ __typename?: 'PageEmbeddingEntity', id?: string | null, order?: number | null, label?: string | null, attributes?: Array<{ __typename?: 'PageAttributeEntity', id?: string | null, translatable?: string | null, value?: string | null, references?: Array<{ __typename?: 'PageAttributeReferenceEntity', id?: string | null, plugin?: { __typename?: 'PluginEntity', id?: string | null } | null, media?: { __typename?: 'MediaEntity', id?: string | null, created?: any | null, extension?: string | null, mimeType?: string | null, modified?: any | null, name?: string | null, size?: any | null, url?: string | null, base64?: string | null, attribution?: { __typename?: 'MediaAttributionEntity', id?: string | null, title?: string | null, author?: string | null, source?: string | null, license?: string | null } | null } | null } | null> | null, translatables?: Array<{ __typename?: 'PageAttributeTranslatableEntity', id?: string | null, translatable?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null, type?: { __typename?: 'PageAttributeTypeEntity', id?: string | null, code?: string | null } | null } | null> | null, type?: { __typename?: 'PageEmbeddingTypeEntity', id?: string | null, code?: string | null, translatables?: Array<{ __typename?: 'PageEmbeddingTypeTranslatableEntity', id?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null } | null> | null, menuItems?: Array<{ __typename?: 'MenuItemEntity', id?: string | null, order?: number | null, icon?: string | null, parent?: { __typename?: 'MenuItemEntity', id?: string | null, translatables?: Array<{ __typename?: 'MenuItemTranslatableEntity', id?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null, translatables?: Array<{ __typename?: 'MenuItemTranslatableEntity', id?: string | null, name?: string | null, shortDescription?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null> | null } | null };

export const GetPageDetailsDocument = gql`
    query getPageDetails($entity: PageEntityInput) {
  getPage(entity: $entity) {
    id
    slug
    isLanding
    label
    embeddings {
      id
      order
      label
      attributes {
        id
        translatable
        value
        references {
          id
          plugin {
            id
          }
          media {
            ...Media
          }
        }
        translatables {
          id
          translatable
          language {
            ...Language
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
        translatables {
          id
          name
          language {
            ...Language
          }
        }
      }
    }
    menuItems {
      id
      order
      icon
      parent {
        id
        translatables {
          id
          name
          language {
            ...Language
          }
        }
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
}
    ${MediaFragmentDoc}
${LanguageFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetPageDetailsGQL extends Apollo.Query<GetPageDetailsQuery, GetPageDetailsQueryVariables> {
    override document = GetPageDetailsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }