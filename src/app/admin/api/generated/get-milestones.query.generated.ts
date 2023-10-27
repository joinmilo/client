/* eslint-disable */
import * as Types from '../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { LanguageFragmentDoc } from '../../../core/api/generated/language.fragment.generated';
import { MediaFragmentDoc } from '../../../core/api/generated/media.fragment.generated';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type GetMilestonesQueryVariables = Types.Exact<{
  params?: Types.InputMaybe<Types.FilterSortPaginateInput>;
}>;


export type GetMilestonesQuery = { __typename?: 'Query', getMilestones?: { __typename?: 'PageableList_MilestoneEntity', total: any, result?: Array<{ __typename?: 'MilestoneEntity', id?: string | null, endDate?: any | null, elements?: Array<{ __typename?: 'MilestoneElementEntity', id?: string | null, translatables?: Array<{ __typename?: 'MilestoneElementTranslatableEntity', id?: string | null, name?: string | null, description?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null> | null, translatables?: Array<{ __typename?: 'MilestoneTranslatableEntity', id?: string | null, title?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null, uploads?: Array<{ __typename?: 'MilestoneMediaEntity', media?: { __typename?: 'MediaEntity', id?: string | null, created?: any | null, extension?: string | null, mimeType?: string | null, modified?: any | null, name?: string | null, size?: any | null, url?: string | null, base64?: string | null, attribution?: { __typename?: 'MediaAttributionEntity', id?: string | null, title?: string | null, author?: string | null, source?: string | null, license?: string | null } | null } | null } | null> | null } | null> | null } | null };

export const GetMilestonesDocument = gql`
    query getMilestones($params: FilterSortPaginateInput) {
  getMilestones(params: $params) {
    result {
      id
      endDate
      elements {
        id
        translatables {
          id
          name
          description
          language {
            ...Language
          }
        }
      }
      translatables {
        id
        title
        language {
          ...Language
        }
      }
      uploads {
        media {
          ...Media
        }
      }
    }
    total
  }
}
    ${LanguageFragmentDoc}
${MediaFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetMilestonesGQL extends Apollo.Query<GetMilestonesQuery, GetMilestonesQueryVariables> {
    override document = GetMilestonesDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }