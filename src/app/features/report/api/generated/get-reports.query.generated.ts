/* eslint-disable */
import * as Types from '../../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { LanguageFragmentDoc } from '../../../../core/api/generated/language.fragment.generated';
import { MediaFragmentDoc } from '../../../../core/api/generated/media.fragment.generated';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type GetReportsQueryVariables = Types.Exact<{
  params?: Types.InputMaybe<Types.FilterSortPaginateInput>;
}>;


export type GetReportsQuery = { __typename?: 'Query', getReports?: { __typename?: 'PageableList_ReportEntity', total: any, result?: Array<{ __typename?: 'ReportEntity', id?: string | null, created?: any | null, modified?: any | null, name?: string | null, email?: string | null, translatables?: Array<{ __typename?: 'ReportTranslatableEntity', id?: string | null, content?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null, uploads?: Array<{ __typename?: 'ReportMediaEntity', media?: { __typename?: 'MediaEntity', id?: string | null, created?: any | null, extension?: string | null, mimeType?: string | null, modified?: any | null, name?: string | null, size?: any | null, url?: string | null, attribution?: { __typename?: 'MediaAttributionEntity', id?: string | null, title?: string | null, author?: string | null, source?: string | null, license?: string | null } | null } | null } | null> | null, type?: { __typename?: 'ReportTypeEntity', id?: string | null, translatables?: Array<{ __typename?: 'ReportTypeTranslatableEntity', id?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null } | null> | null } | null };

export const GetReportsDocument = gql`
    query getReports($params: FilterSortPaginateInput) {
  getReports(params: $params) {
    result {
      id
      created
      modified
      name
      email
      translatables {
        id
        content
        language {
          ...Language
        }
      }
      uploads {
        media {
          ...Media
        }
      }
      type {
        id
        translatables {
          id
          name
          language {
            ...Language
          }
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
  export class GetReportsGQL extends Apollo.Query<GetReportsQuery, GetReportsQueryVariables> {
    override document = GetReportsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }