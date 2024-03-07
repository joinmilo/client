/* eslint-disable */
import * as Types from '../../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type GetNavigatorStartPageQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetNavigatorStartPageQuery = { __typename?: 'Query', getNavigatorStartPage?: { __typename?: 'NavigatorPageEntity', id?: string | null, modified?: any | null, created?: any | null, slug?: string | null, title?: string | null, additionalInformation?: string | null, isResultPage?: boolean | null, choices?: Array<{ __typename?: 'NavigatorChoiceEntity', id?: string | null, description?: string | null, name?: string | null, nextPage?: { __typename?: 'NavigatorPageEntity', id?: string | null, slug?: string | null } | null, translatables?: Array<{ __typename?: 'NavigatorChoiceTranslatableEntity', id?: string | null, name?: string | null, description?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null> | null, parentChoices?: Array<{ __typename?: 'NavigatorChoiceEntity', id?: string | null } | null> | null, translatables?: Array<{ __typename?: 'NavigatorPageTranslatableEntity', id?: string | null, additionalInformation?: string | null, title?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null };

export const GetNavigatorStartPageDocument = gql`
    query getNavigatorStartPage {
  getNavigatorStartPage {
    id
    modified
    created
    slug
    title
    additionalInformation
    isResultPage
    choices {
      id
      description
      name
      nextPage {
        id
        slug
      }
      translatables {
        id
        name
        description
        language {
          id
          locale
          name
        }
      }
    }
    parentChoices {
      id
    }
    translatables {
      id
      additionalInformation
      title
      language {
        id
        locale
        name
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetNavigatorStartPageGQL extends Apollo.Query<GetNavigatorStartPageQuery, GetNavigatorStartPageQueryVariables> {
    override document = GetNavigatorStartPageDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }