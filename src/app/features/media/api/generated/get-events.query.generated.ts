/* eslint-disable */
import * as Types from '../../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { LanguageFragmentDoc } from '../../../../core/api/generated/language.fragment.generated';
import { ContactFragmentDoc } from '../../../../core/api/generated/contact.fragment.generated';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type GetEventsQueryVariables = Types.Exact<{
  params?: Types.InputMaybe<Types.FilterSortPaginateInput>;
}>;


export type GetEventsQuery = { __typename?: 'Query', getEvents?: { __typename?: 'PageableList_EventEntity', total: any, result?: Array<{ __typename?: 'EventEntity', id?: string | null, created?: any | null, modified?: any | null, slug?: string | null, sponsored?: boolean | null, category?: { __typename?: 'EventCategoryEntity', id?: string | null, icon?: string | null, color?: string | null, translatables?: Array<{ __typename?: 'EventCategoryTranslatableEntity', id?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null, contact?: { __typename?: 'ContactEntity', id?: string | null, email?: string | null, name?: string | null, phone?: string | null, preferredContact?: boolean | null, website?: string | null } | null, translatables?: Array<{ __typename?: 'EventTranslatableEntity', id?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null> | null } | null };

export const GetEventsDocument = gql`
    query getEvents($params: FilterSortPaginateInput) {
  getEvents(params: $params) {
    result {
      id
      created
      modified
      slug
      sponsored
      category {
        id
        icon
        color
        translatables {
          id
          name
          language {
            ...Language
          }
        }
      }
      contact {
        ...Contact
      }
      translatables {
        id
        name
        language {
          ...Language
        }
      }
    }
    total
  }
}
    ${LanguageFragmentDoc}
${ContactFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetEventsGQL extends Apollo.Query<GetEventsQuery, GetEventsQueryVariables> {
    override document = GetEventsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }