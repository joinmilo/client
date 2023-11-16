/* eslint-disable */
import * as Types from '../../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { MediaCategoryFragmentDoc } from './media-category.fragment.generated';
import { MediaEntityFragmentDoc } from './media-entity.fragment.generated';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type GetMediaFormQueryVariables = Types.Exact<{
  entity?: Types.InputMaybe<Types.InfoMediaEntityInput>;
}>;


export type GetMediaFormQuery = { __typename?: 'Query', getInfoMedium?: { __typename?: 'InfoMediaEntity', id?: string | null, category?: { __typename?: 'InfoMediaCategoryEntity', id?: string | null, name?: string | null, translatables?: Array<{ __typename?: 'InfoMediaCategoryTranslatableEntity', id?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, name?: string | null, locale?: string | null } | null } | null> | null } | null, media?: { __typename?: 'MediaEntity', mimeType?: string | null, name?: string | null, url?: string | null, attribution?: { __typename?: 'MediaAttributionEntity', author?: string | null, id?: string | null, license?: string | null, source?: string | null, title?: string | null } | null } | null } | null };

export const GetMediaFormDocument = gql`
    query getMediaForm($entity: InfoMediaEntityInput) {
  getInfoMedium(entity: $entity) {
    category {
      ...MediaCategory
    }
    id
    media {
      ...MediaEntity
    }
  }
}
    ${MediaCategoryFragmentDoc}
${MediaEntityFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetMediaFormGQL extends Apollo.Query<GetMediaFormQuery, GetMediaFormQueryVariables> {
    override document = GetMediaFormDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }