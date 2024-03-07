/* eslint-disable */
import * as Types from '../../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { LanguageFragmentDoc } from '../../../../core/api/generated/language.fragment.generated';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type GetNavigatorPagesQueryVariables = Types.Exact<{
  params?: Types.InputMaybe<Types.FilterSortPaginateInput>;
}>;


export type GetNavigatorPagesQuery = { __typename?: 'Query', getNavigatorPages?: { __typename?: 'PageableList_NavigatorPageEntity', total: any, result?: Array<{ __typename?: 'NavigatorPageEntity', id?: string | null, created?: any | null, modified?: any | null, slug?: string | null, title?: string | null, additionalInformation?: string | null, isResultPage?: boolean | null, translatables?: Array<{ __typename?: 'NavigatorPageTranslatableEntity', id?: string | null, title?: string | null, additionalInformation?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null, parentChoices?: Array<{ __typename?: 'NavigatorChoiceEntity', id?: string | null, translatables?: Array<{ __typename?: 'NavigatorChoiceTranslatableEntity', id?: string | null, name?: string | null, description?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null> | null, choices?: Array<{ __typename?: 'NavigatorChoiceEntity', id?: string | null, nextPage?: { __typename?: 'NavigatorPageEntity', id?: string | null } | null, translatables?: Array<{ __typename?: 'NavigatorChoiceTranslatableEntity', id?: string | null, name?: string | null, description?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null> | null } | null> | null } | null };

export const GetNavigatorPagesDocument = gql`
    query getNavigatorPages($params: FilterSortPaginateInput) {
  getNavigatorPages(params: $params) {
    result {
      id
      created
      modified
      slug
      title
      additionalInformation
      isResultPage
      translatables {
        id
        title
        additionalInformation
        language {
          ...Language
        }
      }
      parentChoices {
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
      choices {
        id
        nextPage {
          id
        }
        translatables {
          id
          name
          description
          language {
            ...Language
          }
        }
      }
    }
    total
  }
}
    ${LanguageFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetNavigatorPagesGQL extends Apollo.Query<GetNavigatorPagesQuery, GetNavigatorPagesQueryVariables> {
    override document = GetNavigatorPagesDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }