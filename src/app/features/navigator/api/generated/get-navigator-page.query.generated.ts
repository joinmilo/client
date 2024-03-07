/* eslint-disable */
import * as Types from '../../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type GetNavigatorPageQueryVariables = Types.Exact<{
  entity?: Types.InputMaybe<Types.NavigatorPageEntityInput>;
}>;


export type GetNavigatorPageQuery = { __typename?: 'Query', getNavigatorPage?: { __typename?: 'NavigatorPageEntity', id?: string | null, modified?: any | null, created?: any | null, slug?: string | null, title?: string | null, additionalInformation?: string | null, translatables?: Array<{ __typename?: 'NavigatorPageTranslatableEntity', id?: string | null, additionalInformation?: string | null, title?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null, choices?: Array<{ __typename?: 'NavigatorChoiceEntity', id?: string | null, description?: string | null, name?: string | null, parent?: { __typename?: 'NavigatorPageEntity', id?: string | null, slug?: string | null } | null, nextPage?: { __typename?: 'NavigatorPageEntity', id?: string | null, slug?: string | null } | null, translatables?: Array<{ __typename?: 'NavigatorChoiceTranslatableEntity', id?: string | null, name?: string | null, description?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null> | null, parentChoices?: Array<{ __typename?: 'NavigatorChoiceEntity', id?: string | null, translatables?: Array<{ __typename?: 'NavigatorChoiceTranslatableEntity', id?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null> | null, links?: Array<{ __typename?: 'NavigatorResultLinkEntity', id?: string | null, name?: string | null, url?: string | null, translatables?: Array<{ __typename?: 'NavigatorResultLinkTranslatableEntity', id?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null> | null } | null };

export const GetNavigatorPageDocument = gql`
    query getNavigatorPage($entity: NavigatorPageEntityInput) {
  getNavigatorPage(entity: $entity) {
    id
    modified
    created
    slug
    title
    additionalInformation
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
    choices {
      id
      description
      name
      parent {
        id
        slug
      }
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
      translatables {
        id
        name
        language {
          id
          locale
          name
        }
      }
    }
    links {
      id
      name
      url
      translatables {
        id
        name
        language {
          id
          locale
          name
        }
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetNavigatorPageGQL extends Apollo.Query<GetNavigatorPageQuery, GetNavigatorPageQueryVariables> {
    override document = GetNavigatorPageDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }