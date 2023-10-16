/* eslint-disable */
import * as Types from '../../../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { SurveyCardFragmentDoc } from './survey-card.fragment.generated';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type GetSurveyCardsQueryVariables = Types.Exact<{
  params?: Types.InputMaybe<Types.FilterSortPaginateInput>;
}>;


export type GetSurveyCardsQuery = { __typename?: 'Query', getSurveys?: { __typename?: 'PageableList_SurveyEntity', total: any, result?: Array<{ __typename?: 'SurveyEntity', id?: string | null, name?: string | null, slug?: string | null, dueDate?: any | null, startDate?: any | null, uploads?: Array<{ __typename?: 'SurveyMediaEntity', title?: boolean | null, card?: boolean | null, media?: { __typename?: 'MediaEntity', id?: string | null, created?: any | null, extension?: string | null, mimeType?: string | null, modified?: any | null, name?: string | null, size?: any | null, url?: string | null, base64?: string | null, attribution?: { __typename?: 'MediaAttributionEntity', id?: string | null, title?: string | null, author?: string | null, source?: string | null, license?: string | null } | null } | null } | null> | null, translatables?: Array<{ __typename?: 'SurveyTranslatableEntity', id?: string | null, description?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null, contact?: { __typename?: 'ContactEntity', id?: string | null, email?: string | null, name?: string | null, phone?: string | null, preferredContact?: boolean | null, website?: string | null } | null } | null> | null } | null };

export const GetSurveyCardsDocument = gql`
    query getSurveyCards($params: FilterSortPaginateInput) {
  getSurveys(params: $params) {
    result {
      ...SurveyCard
    }
    total
  }
}
    ${SurveyCardFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetSurveyCardsGQL extends Apollo.Query<GetSurveyCardsQuery, GetSurveyCardsQueryVariables> {
    override document = GetSurveyCardsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }