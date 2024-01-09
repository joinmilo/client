/* eslint-disable */
import * as Types from '../../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { ContestTypeFragmentDoc } from './contest-type.fragement.generated';
import { ContactFragmentDoc } from '../../../../core/api/generated/contact.fragment.generated';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type GetContestsQueryVariables = Types.Exact<{
  params?: Types.InputMaybe<Types.FilterSortPaginateInput>;
}>;


export type GetContestsQuery = { __typename?: 'Query', getContests?: { __typename?: 'PageableList_ContestEntity', total: any, result?: Array<{ __typename?: 'ContestEntity', id?: string | null, created?: any | null, modified?: any | null, slug?: string | null, sponsored?: boolean | null, participationEndDate?: any | null, voteEndDate?: any | null, participations?: Array<{ __typename?: 'ContestParticipationEntity', id?: string | null } | null> | null, type?: { __typename?: 'ContestTypeEntity', id?: string | null, code?: string | null, name?: string | null, translatables?: Array<{ __typename?: 'ContestTypeTranslatableEntity', id?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null, translatables?: Array<{ __typename?: 'ContestTranslatableEntity', id?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null, contact?: { __typename?: 'ContactEntity', id?: string | null, email?: string | null, name?: string | null, phone?: string | null, preferredContact?: boolean | null, website?: string | null } | null } | null> | null } | null };

export const GetContestsDocument = gql`
    query getContests($params: FilterSortPaginateInput) {
  getContests(params: $params) {
    result {
      id
      created
      modified
      slug
      sponsored
      participationEndDate
      voteEndDate
      participations {
        id
      }
      type {
        ...ContestType
      }
      translatables {
        id
        name
        language {
          id
          locale
          name
        }
      }
      contact {
        ...Contact
      }
    }
    total
  }
}
    ${ContestTypeFragmentDoc}
${ContactFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetContestsGQL extends Apollo.Query<GetContestsQuery, GetContestsQueryVariables> {
    override document = GetContestsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }