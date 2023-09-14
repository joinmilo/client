/* eslint-disable */
import * as Types from '../../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { LanguageFragmentDoc } from '../../../../core/api/generated/language.fragment.generated';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type GetSurveyDetailsQueryVariables = Types.Exact<{
  entity?: Types.InputMaybe<Types.SurveyEntityInput>;
}>;


export type GetSurveyDetailsQuery = { __typename?: 'Query', getSurvey?: { __typename?: 'SurveyEntity', id?: string | null, slug?: string | null, translatables?: Array<{ __typename?: 'SurveyTranslatableEntity', id?: string | null, name?: string | null, description?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null };

export const GetSurveyDetailsDocument = gql`
    query getSurveyDetails($entity: SurveyEntityInput) {
  getSurvey(entity: $entity) {
    id
    slug
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
    ${LanguageFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetSurveyDetailsGQL extends Apollo.Query<GetSurveyDetailsQuery, GetSurveyDetailsQueryVariables> {
    override document = GetSurveyDetailsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }