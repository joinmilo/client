/* eslint-disable */
import * as Types from '../../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { ContactFragmentDoc } from '../../../../core/api/generated/contact.fragment.generated';
import { LanguageFragmentDoc } from '../../../../core/api/generated/language.fragment.generated';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type GetSurveysQueryVariables = Types.Exact<{
  params?: Types.InputMaybe<Types.FilterSortPaginateInput>;
}>;


export type GetSurveysQuery = { __typename?: 'Query', getSurveys?: { __typename?: 'PageableList_SurveyEntity', total: any, result?: Array<{ __typename?: 'SurveyEntity', id?: string | null, created?: any | null, modified?: any | null, slug?: string | null, sponsored?: boolean | null, startDate?: any | null, dueDate?: any | null, contact?: { __typename?: 'ContactEntity', id?: string | null, email?: string | null, name?: string | null, phone?: string | null, preferredContact?: boolean | null, website?: string | null } | null, state?: { __typename?: 'SurveyStateEntity', id?: string | null, code?: string | null } | null, translatables?: Array<{ __typename?: 'SurveyTranslatableEntity', id?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null> | null } | null };

export const GetSurveysDocument = gql`
    query getSurveys($params: FilterSortPaginateInput) {
  getSurveys(params: $params) {
    result {
      id
      created
      modified
      slug
      sponsored
      startDate
      dueDate
      contact {
        ...Contact
      }
      state {
        id
        code
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
    ${ContactFragmentDoc}
${LanguageFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetSurveysGQL extends Apollo.Query<GetSurveysQuery, GetSurveysQueryVariables> {
    override document = GetSurveysDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }