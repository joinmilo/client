/* eslint-disable */
import * as Types from '../../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { LanguageFragmentDoc } from '../../../../core/api/generated/language.fragment.generated';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type GetOrganisationEventsQueryVariables = Types.Exact<{
  params?: Types.InputMaybe<Types.FilterSortPaginateInput>;
}>;


export type GetOrganisationEventsQuery = { __typename?: 'Query', getEvents?: { __typename?: 'PageableList_EventEntity', total: any, result?: Array<{ __typename?: 'EventEntity', id?: string | null, slug?: string | null, name?: string | null, sponsored?: boolean | null, created?: any | null, modified?: any | null, category?: { __typename?: 'EventCategoryEntity', id?: string | null, icon?: string | null, color?: string | null, name?: string | null, translatables?: Array<{ __typename?: 'EventCategoryTranslatableEntity', id?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null, organisation?: { __typename?: 'OrganisationEntity', id?: string | null } | null } | null> | null } | null };

export const GetOrganisationEventsDocument = gql`
    query getOrganisationEvents($params: FilterSortPaginateInput) {
  getEvents(params: $params) {
    result {
      id
      slug
      name
      sponsored
      category {
        id
        icon
        color
        name
        translatables {
          id
          name
          language {
            ...Language
          }
        }
      }
      created
      modified
      organisation {
        id
      }
    }
    total
  }
}
    ${LanguageFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetOrganisationEventsGQL extends Apollo.Query<GetOrganisationEventsQuery, GetOrganisationEventsQueryVariables> {
    override document = GetOrganisationEventsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }